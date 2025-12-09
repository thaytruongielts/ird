import React, { useState } from 'react';
import { EXAM_DATA, FULL_TEXT_CONTENT, FULL_TEXT_TITLE } from './constants';
import QuestionCard from './components/QuestionCard';
import StrategyCard from './components/StrategyCard';
import { SectionType } from './types';
import { BookOpen, Menu, X, ArrowRight, BrainCircuit, FileText } from 'lucide-react';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState(EXAM_DATA[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullTextOpen, setIsFullTextOpen] = useState(false);

  const activeSection = EXAM_DATA.find(s => s.id === activeSectionId) || EXAM_DATA[0];

  const handleNavClick = (id: string) => {
    setActiveSectionId(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-20">
        <div className="flex items-center gap-2 font-bold text-blue-800">
          <BrainCircuit className="text-blue-600" />
          <span>IELTS Deep Dive</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600 hover:bg-slate-100 rounded-md">
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-10 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 flex flex-col
        ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full'}
      `}>
        <div className="h-full overflow-y-auto flex flex-col">
          <div className="p-6 border-b border-slate-100 hidden md:flex items-center gap-2 font-bold text-2xl text-blue-800">
            <BrainCircuit className="text-blue-600 w-8 h-8" />
            <span>Deep Dive</span>
          </div>

          <div className="p-4 flex-1">
            <button 
              onClick={() => setIsFullTextOpen(true)}
              className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors shadow-sm"
            >
              <FileText size={18} />
              Read Full Text
            </button>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Analysis Sections</h3>
            <nav className="space-y-1">
              {EXAM_DATA.map((section) => {
                const isActive = activeSectionId === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between group
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                    `}
                  >
                    <span className="truncate">{section.title}</span>
                    {isActive && <ArrowRight size={16} className="text-blue-500" />}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200">
            <p className="text-xs text-slate-500 leading-relaxed">
              Based on Salvador Dali Reading Passage. <br/>
              Focus on Paraphrasing & Keyword Matching.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
              {activeSection.type.replace('_', ' ')}
            </div>
            <button 
              onClick={() => setIsFullTextOpen(true)}
              className="md:hidden text-blue-600 font-medium text-sm flex items-center gap-1"
            >
              <FileText size={16} /> Read Passage
            </button>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{activeSection.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl">{activeSection.description}</p>
        </header>

        {/* Content Render */}
        <div className="animate-in fade-in duration-500">
          {activeSection.type === SectionType.STRATEGY ? (
            <StrategyCard points={activeSection.strategyPoints || []} />
          ) : (
            <>
              <div className="space-y-6">
                {activeSection.questions.map((q, idx) => (
                  <QuestionCard 
                    key={q.id} 
                    question={q} 
                    index={idx}
                    sectionQuestions={activeSection.questions} 
                  />
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                <BookOpen className="mx-auto text-indigo-400 mb-3 w-8 h-8" />
                <h3 className="text-indigo-900 font-semibold mb-1">End of Section</h3>
                <p className="text-indigo-600 text-sm">Review the keywords carefully before moving to the next part.</p>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Full Text Modal */}
      {isFullTextOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col animate-in zoom-in-95 duration-200">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white rounded-t-xl z-10">
              <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <FileText className="text-blue-600" />
                {FULL_TEXT_TITLE}
              </h2>
              <button 
                onClick={() => setIsFullTextOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto leading-loose text-slate-700 font-serif text-lg space-y-4">
              {FULL_TEXT_CONTENT.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="p-4 border-t border-slate-100 bg-slate-50 rounded-b-xl flex justify-end">
              <button 
                onClick={() => setIsFullTextOpen(false)}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close Reading Text
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;