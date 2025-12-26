
import React from 'react';

const Verdict: React.FC = () => {
  return (
    <section id="verdict" className="scroll-mt-24 pb-20 space-y-8">
      <div className="border-l-4 border-stone-800 pl-6">
        <h3 className="text-2xl font-serif font-bold mb-2">IV. The Consultant's Decree</h3>
        <p className="text-stone-600">We must stop recommending tools based on popularity and start recommending them based on <strong>organizational DNA</strong>.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm transition-transform hover:-translate-y-1">
          <h4 className="font-bold text-blue-900 mb-2">Recommendation A: Deploy Airtable When...</h4>
          <p className="text-sm text-blue-800 mb-4">The client is a <strong>"Front-Office"</strong> operation (Creative Directors, Sales VPs).</p>
          <ul className="text-sm text-blue-800 space-y-2 list-disc pl-4">
            <li>Visuals are paramount.</li>
            <li>Budget allows for $54/user/mo.</li>
            <li>Data volume is low (&lt; 100k records).</li>
          </ul>
          <div className="mt-6 pt-4 border-t border-blue-200 text-xs font-semibold text-blue-900 flex justify-between items-center">
            <span>Key Feature: AI Cobuilder</span>
            <span className="bg-blue-200/50 px-2 py-1 rounded">Visual Priority</span>
          </div>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-100 shadow-sm transition-transform hover:-translate-y-1">
          <h4 className="font-bold text-amber-900 mb-2">Recommendation B: Deploy Grist When...</h4>
          <p className="text-sm text-amber-800 mb-4">The client is a <strong>"Back-Office"</strong> engine (Ops Directors, Supply Chain).</p>
          <ul className="text-sm text-amber-800 space-y-2 list-disc pl-4">
            <li>Complex logic (Python) is required.</li>
            <li>Margins are thin ($8/user/mo).</li>
            <li>Data volume is high (500k+ records).</li>
          </ul>
          <div className="mt-6 pt-4 border-t border-amber-200 text-xs font-semibold text-amber-900 flex justify-between items-center">
            <span>Key Feature: Python Integration</span>
            <span className="bg-amber-200/50 px-2 py-1 rounded">Logical Priority</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verdict;
