
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="text-center space-y-6 pt-12">
      <div className="inline-block px-3 py-1 bg-stone-200 text-stone-600 rounded-full text-xs font-semibold tracking-wide mb-4">
        CONFIDENTIAL: BOARD REPORT
      </div>
      <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 leading-tight">
        The Architecture of Truth
      </h1>
      <h2 className="text-xl md:text-2xl text-stone-500 font-light">
        A Comparative Analysis of Airtable & Grist
      </h2>
      <p className="max-w-2xl mx-auto text-stone-600 leading-relaxed italic">
        "We do not merely manage data; we manage narratives. I have concluded that we are not looking at two similar tools, but two distinct philosophies of reality."
        <span className="block mt-4 text-sm font-semibold not-italic">— Julian V. Thorne, Senior Analyst</span>
      </p>
    </header>
  );
};

export default Hero;
