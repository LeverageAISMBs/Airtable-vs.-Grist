
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-serif italic text-lg mb-4 text-stone-300">"A spreadsheet is not a grid; it is a story waiting to be told."</p>
        <div className="h-px w-24 bg-stone-700 mx-auto mb-6"></div>
        <p className="text-xs tracking-widest uppercase font-semibold">Thorne & Sallow Consultancy &copy; 2025</p>
        <p className="mt-4 text-[10px] text-stone-500 uppercase tracking-tighter">Strictly Confidential & Internal Use Only</p>
      </div>
    </footer>
  );
};

export default Footer;
