import React from 'react';
import { Lightbulb } from 'lucide-react';

interface StrategyCardProps {
  points: { title: string; content: string }[];
}

const StrategyCard: React.FC<StrategyCardProps> = ({ points }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-xl shadow-lg p-6 text-white mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
          <Lightbulb className="text-yellow-300" size={24} />
        </div>
        <h2 className="text-2xl font-bold">Chiến thuật rút ra</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        {points.map((point, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10 hover:bg-white/20 transition-colors">
            <h3 className="font-bold text-yellow-300 mb-1 text-lg">{point.title}</h3>
            <p className="text-blue-100 leading-relaxed">{point.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StrategyCard;