export interface AnalysisPoint {
  questionKeyword: string;
  textKeyword: string;
  explanation: string;
}

export interface Question {
  id: string;
  questionText: string;
  answer: string;
  explanation?: string; // Additional context
  analysisPoints: AnalysisPoint[];
  note?: string; // For "Lưu ý bẫy" etc.
  contextSnippet?: string; // Text with {{target}} syntax for interactive mode
}

export enum SectionType {
  MATCHING = 'MATCHING',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  SUMMARY = 'SUMMARY',
  STRATEGY = 'STRATEGY'
}

export interface Section {
  id: string;
  title: string;
  type: SectionType;
  description: string;
  questions: Question[];
  strategyPoints?: { title: string; content: string }[];
}