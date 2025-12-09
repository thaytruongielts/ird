import React, { useState, useMemo, useEffect } from 'react';
import { Question } from '../types';
import AnalysisTable from './AnalysisTable';
import { CheckCircle2, AlertTriangle, ChevronDown, ChevronUp, RefreshCw, BrainCircuit, XCircle, Trophy } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  index: number;
  sectionQuestions: Question[]; // All questions in the section to pool keywords
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, sectionQuestions }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  // Parse current snippet for rendering
  const snippetParts = useMemo(() => {
    if (!question.contextSnippet) return [];
    
    // Split by {{...}}
    const parts = question.contextSnippet.split(/(\{\{.*?\}\})/g);
    
    let answerIndexCounter = 0;
    return parts.map((part, i) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        const content = part.slice(2, -2);
        const index = answerIndexCounter++;
        return { isTarget: true, content, index, key: i };
      }
      return { isTarget: false, content: part, key: i };
    });
  }, [question.contextSnippet]);

  // Generate Word Bank from ALL questions in the section
  const wordBank = useMemo<string[]>(() => {
    const allKeywords: string[] = [];
    
    // Helper to extract
    const extract = (q: Question) => {
      if (!q.contextSnippet) return;
      const matches = q.contextSnippet.match(/\{\{(.*?)\}\}/g);
      if (matches) {
        matches.forEach(m => allKeywords.push(m.slice(2, -2)));
      }
    };

    // Gather from all questions in this section
    sectionQuestions.forEach(extract);
    
    // Shuffle
    return allKeywords.sort(() => Math.random() - 0.5);
  }, [sectionQuestions]);

  // Reset state when entering practice mode
  useEffect(() => {
    if (isPracticeMode) {
      setUserAnswers({});
      setIsChecked(false);
      setSelectedWord(null);
    }
  }, [isPracticeMode]);

  const handleSlotClick = (index: number) => {
    if (isChecked) return; // Locked after check
    
    // If a word is selected from bank, fill slot
    if (selectedWord) {
      setUserAnswers(prev => ({
        ...prev,
        [index]: selectedWord
      }));
      setSelectedWord(null);
    } 
    // If slot is already filled, clear it (move back to bank conceptually)
    else if (userAnswers[index]) {
      const newAnswers = { ...userAnswers };
      delete newAnswers[index];
      setUserAnswers(newAnswers);
    }
  };

  const handleWordClick = (word: string) => {
    if (isChecked) return;
    // If clicking the same word, deselect
    if (selectedWord === word) {
      setSelectedWord(null);
    } else {
      setSelectedWord(word);
    }
  };

  // Determine available words in bank (total instances in bank - instances used in slots)
  const availableWords = useMemo(() => {
    const counts: Record<string, number> = {};
    wordBank.forEach((w) => counts[w] = (counts[w] || 0) + 1);
    
    Object.values(userAnswers).forEach((w) => {
      const word = w as string;
      if (counts[word]) counts[word]--;
    });

    return wordBank.filter((w) => {
      if (counts[w] > 0) {
        counts[w]--;
        return true;
      }
      return false;
    });
  }, [wordBank, userAnswers]);

  const checkAnswers = () => {
    setIsChecked(true);
    setSelectedWord(null);
  };

  const resetPractice = () => {
    setUserAnswers({});
    setIsChecked(false);
    setSelectedWord(null);
  };

  const isCorrect = (index: number, content: string) => userAnswers[index] === content;
  
  // Calculate score
  const totalSlots = snippetParts.filter(p => p.isTarget).length;
  const correctCount = snippetParts.filter(p => p.isTarget && isCorrect(p.index!, p.content)).length;
  const isAllCorrect = totalSlots > 0 && correctCount === totalSlots;

  return (
    <div className={`mb-8 rounded-xl shadow-sm border overflow-hidden transition-all duration-300 ${isPracticeMode ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-200' : 'bg-white border-slate-200'}`}>
      
      {/* Header */}
      <div 
        className={`p-4 flex justify-between items-start transition-colors ${isPracticeMode ? 'bg-indigo-100/50' : 'bg-white hover:bg-slate-50 cursor-pointer'}`}
        onClick={() => !isPracticeMode && setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shadow-sm ${isPracticeMode ? 'bg-indigo-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
              Q{question.id}
            </span>
            <h3 className="text-lg font-medium text-slate-800 pr-4 leading-snug">
              {question.questionText}
            </h3>
          </div>
          
          {!isPracticeMode && (
            <div className="flex items-center gap-2 ml-10 text-green-700 font-medium p-2 bg-green-50 rounded-md inline-block text-sm border border-green-100">
              <CheckCircle2 size={16} />
              <span>Answer: {question.answer}</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          {question.contextSnippet && (
            <button
              onClick={(e) => { e.stopPropagation(); setIsPracticeMode(!isPracticeMode); }}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm z-10 ${
                isPracticeMode 
                  ? 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-md'
              }`}
            >
              {isPracticeMode ? <XCircle size={14} /> : <BrainCircuit size={14} />}
              {isPracticeMode ? 'Exit Practice' : 'Practice Mode'}
            </button>
          )}
          {!isPracticeMode && (
            <button className="text-slate-400 hover:text-blue-500 transition-colors p-1">
              {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Content Body */}
      {isOpen && (
        <div className="px-5 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="md:ml-10 pt-2">
            
            {/* Note / Trap Warning */}
            {question.note && !isPracticeMode && (
               <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm rounded-r-md flex gap-3 shadow-sm">
                 <AlertTriangle className="shrink-0 text-amber-500" size={20} />
                 <div>
                   <p className="font-bold mb-1">Caution:</p>
                   <p>{question.note}</p>
                 </div>
               </div>
            )}

            {isPracticeMode ? (
              <div className="space-y-6">
                 {/* Instructions */}
                 <div className="flex justify-between items-center text-indigo-900/60 text-xs uppercase font-bold tracking-widest border-b border-indigo-100 pb-2">
                   <span>Fill in the blanks</span>
                   <span className="flex items-center gap-1"><BrainCircuit size={12}/> {sectionQuestions.length > 1 ? 'Mixed Section Keywords' : 'Drag or Click'}</span>
                 </div>

                 {/* Interactive Text Area */}
                 <div className="bg-white p-6 rounded-xl border border-indigo-100 shadow-sm leading-8 text-lg text-slate-700 font-serif">
                    {snippetParts.map((part) => (
                      part.isTarget ? (
                        <span 
                          key={part.key}
                          onClick={() => handleSlotClick(part.index!)}
                          className={`
                            inline-flex items-center justify-center min-w-[80px] h-8 mx-1 px-3 rounded-md border-b-2 cursor-pointer transition-all align-middle text-base font-sans font-medium select-none
                            ${userAnswers[part.index!] 
                              ? (isChecked 
                                  ? (isCorrect(part.index!, part.content) 
                                      ? 'bg-green-100 border-green-500 text-green-800' 
                                      : 'bg-red-50 border-red-400 text-red-700 line-through decoration-red-400')
                                  : 'bg-indigo-100 border-indigo-400 text-indigo-900') 
                              : (selectedWord 
                                  ? 'bg-indigo-50 border-dashed border-indigo-300 hover:bg-indigo-100 hover:border-indigo-500 animate-pulse' 
                                  : 'bg-slate-50 border-dashed border-slate-300 hover:border-indigo-300')
                            }
                          `}
                        >
                          {userAnswers[part.index!] || (isChecked && !isCorrect(part.index!, part.content) ? <span className="opacity-50 text-xs">{part.content}</span> : "")}
                        </span>
                      ) : (
                        <span key={part.key}>{part.content}</span>
                      )
                    ))}
                 </div>

                 {/* Controls & Feedback */}
                 {isChecked && (
                   <div className={`p-4 rounded-lg flex items-center justify-center gap-3 font-bold ${isAllCorrect ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                      {isAllCorrect ? <Trophy size={20} className="text-yellow-600"/> : <AlertTriangle size={20}/>}
                      <span>{isAllCorrect ? "Perfect Score! Well done." : `You got ${correctCount} out of ${totalSlots} correct.`}</span>
                      {!isAllCorrect && (
                        <button onClick={resetPractice} className="ml-4 px-3 py-1 bg-white rounded shadow-sm text-sm border hover:bg-slate-50">
                          Try Again
                        </button>
                      )}
                   </div>
                 )}

                 {/* Word Bank */}
                 {!isAllCorrect && (
                   <div className="bg-indigo-900/5 p-5 rounded-xl border border-indigo-100">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Word Bank</h5>
                        {!isChecked && Object.keys(userAnswers).length > 0 && (
                          <button onClick={checkAnswers} className="px-4 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-bold shadow-sm hover:bg-indigo-700 transition-colors">
                            Check Answers
                          </button>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {availableWords.map((word, i) => (
                          <button
                            key={`${word}-${i}`}
                            onClick={() => handleWordClick(word)}
                            disabled={isChecked}
                            className={`
                              px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm transition-all
                              ${selectedWord === word 
                                ? 'bg-indigo-600 text-white border-indigo-600 scale-105 ring-2 ring-indigo-200' 
                                : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'}
                              ${isChecked ? 'opacity-50 cursor-not-allowed' : ''}
                            `}
                          >
                            {word}
                          </button>
                        ))}
                        {availableWords.length === 0 && !isChecked && (
                          <span className="text-sm text-slate-400 italic">All words placed. Click 'Check Answers'.</span>
                        )}
                      </div>
                   </div>
                 )}

                 {/* Explanation Reveal (Only after check) */}
                 {isChecked && (
                    <div className="mt-4 pt-4 border-t border-indigo-100 animate-in fade-in">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Analysis</h4>
                      <AnalysisTable points={question.analysisPoints} />
                    </div>
                 )}
              </div>
            ) : (
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Deep Analysis</h4>
                <AnalysisTable points={question.analysisPoints} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;