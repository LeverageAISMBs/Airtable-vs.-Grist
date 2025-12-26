
import React, { useState } from 'react';
import { PhilosophyData } from '../types';

interface PhilosophyCardProps {
  data: PhilosophyData;
}

const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`group relative bg-white border border-stone-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className={`absolute top-0 left-0 w-full h-1 ${data.id === 'airtable' ? 'bg-blue-500' : 'bg-amber-600'}`}></div>
      <div className="flex justify-between items-start mb-4">
        <h4 className={`text-2xl font-bold ${data.color}`}>{data.title}</h4>
        <span className="text-4xl">{data.emoji}</span>
      </div>
      <p className="font-serif text-lg italic text-stone-700 mb-4">{data.subtitle}</p>
      <p className="text-sm text-stone-500 mb-6">{data.description}</p>
      
      <div className={`${isExpanded ? 'block' : 'hidden'} space-y-3 text-sm text-stone-600 ${data.bgColor} p-4 rounded-lg animate-fade-in`}>
        <p><strong>Primary Strength:</strong> {data.strength}</p>
        <p><strong>The Trade-off:</strong> {data.tradeoff}</p>
        <p><strong>Ideal For:</strong> {data.idealFor}</p>
      </div>
      
      <div className={`text-center mt-4 text-sm font-semibold transition-colors ${data.id === 'airtable' ? 'text-blue-500 group-hover:text-blue-700' : 'text-amber-700 group-hover:text-amber-900'} group-hover:underline`}>
        {isExpanded ? 'Show Less' : 'Click to Expand'}
      </div>
    </div>
  );
};

export default PhilosophyCard;
