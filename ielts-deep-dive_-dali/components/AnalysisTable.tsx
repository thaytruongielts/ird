import React from 'react';
import { AnalysisPoint } from '../types';

interface AnalysisTableProps {
  points: AnalysisPoint[];
}

const AnalysisTable: React.FC<AnalysisTableProps> = ({ points }) => {
  return (
    <div className="overflow-hidden border border-blue-200 rounded-lg shadow-sm mt-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-12 bg-blue-50 border-b border-blue-100 font-semibold text-blue-900 text-sm">
        <div className="p-3 md:col-span-4 border-b md:border-b-0 md:border-r border-blue-100 flex items-center">
          <span className="uppercase tracking-wider text-xs mr-2">Q</span>
          Question Keywords
        </div>
        <div className="p-3 md:col-span-4 border-b md:border-b-0 md:border-r border-blue-100 flex items-center">
          <span className="uppercase tracking-wider text-xs mr-2">Txt</span>
          Text Keywords
        </div>
        <div className="p-3 md:col-span-4 flex items-center">
          <span className="uppercase tracking-wider text-xs mr-2">Why</span>
          Explanation
        </div>
      </div>
      
      {points.map((point, idx) => (
        <div 
          key={idx} 
          className={`grid grid-cols-1 md:grid-cols-12 text-sm text-slate-700 ${
            idx !== points.length - 1 ? 'border-b border-slate-100' : ''
          } hover:bg-slate-50 transition-colors duration-150`}
        >
          <div className="p-3 md:col-span-4 md:border-r border-slate-100">
            <span className="md:hidden font-bold text-xs text-blue-600 block mb-1">Question:</span>
            {point.questionKeyword}
          </div>
          <div className="p-3 md:col-span-4 md:border-r border-slate-100 bg-slate-50/50">
            <span className="md:hidden font-bold text-xs text-blue-600 block mb-1">Text:</span>
            {point.textKeyword}
          </div>
          <div className="p-3 md:col-span-4 italic text-slate-600">
            <span className="md:hidden font-bold text-xs text-blue-600 block mb-1">Why:</span>
            {point.explanation}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnalysisTable;