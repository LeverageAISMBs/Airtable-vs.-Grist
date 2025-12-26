
import React from 'react';

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fafaf9]/90 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex flex-col">
            <span className="font-bold text-lg font-serif tracking-tight text-stone-900">Thorne & Sallow</span>
            <span className="text-xs text-stone-500 uppercase tracking-widest">Consultancy Group</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('philosophy')} className="hover:text-amber-700 transition-colors">Philosophy</button>
            <button onClick={() => scrollToSection('analysis')} className="hover:text-amber-700 transition-colors">Analysis</button>
            <button onClick={() => scrollToSection('simulator')} className="hover:text-amber-700 transition-colors">Simulation</button>
            <button onClick={() => scrollToSection('verdict')} className="text-amber-700 border-b-2 border-amber-700">The Verdict</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
