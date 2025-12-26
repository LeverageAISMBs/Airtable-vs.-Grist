
import React, { useState, useMemo } from 'react';
// Fix: Removed non-existent SIM_CONSTANTS export from types import. SIM_CONSTANTS is correctly imported from constants.ts as CONSTS below.
import { UrgencyStatus } from '../types';
import { SIM_CONSTANTS as CONSTS } from '../constants';

const Simulator: React.FC = () => {
  const [currentWords, setCurrentWords] = useState(45000);

  const stats = useMemo(() => {
    const remaining = CONSTS.TARGET_WORDS - currentWords;
    const daysNeeded = remaining / CONSTS.DAILY_PACE;
    const deficit = daysNeeded - CONSTS.DEADLINE_DAYS;

    let status = UrgencyStatus.NORMAL;
    if (deficit > 0) {
      status = UrgencyStatus.CRITICAL;
    } else if (CONSTS.DEADLINE_DAYS - daysNeeded < 3) {
      status = UrgencyStatus.HIGH;
    }

    return { remaining, daysNeeded, deficit, status };
  }, [currentWords]);

  const getStatusColor = (status: UrgencyStatus) => {
    switch (status) {
      case UrgencyStatus.CRITICAL: return 'text-red-500 border-red-500 bg-red-50';
      case UrgencyStatus.HIGH: return 'text-amber-600 border-amber-500 bg-amber-50';
      default: return 'text-green-600 border-green-500 bg-green-50';
    }
  };

  return (
    <section id="simulator" className="scroll-mt-24 bg-stone-100 p-8 rounded-2xl border border-stone-200">
      <div className="border-l-4 border-amber-600 pl-6 mb-8">
        <h3 className="text-2xl font-serif font-bold mb-2">III. The "Alchemist's Lab" Simulation</h3>
        <p className="text-stone-600">
          Experience Grist's power. Below is a simulation of the <strong>"Project: Chimera"</strong> dashboard. 
          In Airtable, urgency is a manual dropdown. In Grist, it is a <strong>Python script</strong> reacting to live data.
        </p>
        <p className="text-sm text-stone-500 mt-2">Adjust the "Words Written" slider to see the Python code re-calculate urgency instantly.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
            <h4 className="font-bold text-sm uppercase tracking-wide text-stone-500 mb-4">Input Variables</h4>
            <label className="block text-sm font-medium text-stone-700 mb-2">Target Word Count: 80,000</label>
            <div className="mb-6">
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Current Words Written: <span className="font-mono font-bold text-amber-700">{currentWords.toLocaleString()}</span>
              </label>
              <input 
                type="range" 
                min="30000" 
                max="80000" 
                value={currentWords} 
                onChange={(e) => setCurrentWords(parseInt(e.target.value))}
                className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-stone-700 mb-1">Writer Pace (7-day avg):</label>
              <div className="text-xs text-stone-500">Fixed at 1,200 words/day for demo</div>
            </div>
          </div>

          <div className="bg-slate-900 text-green-400 p-4 rounded-lg shadow-inner text-xs md:text-sm font-mono overflow-x-auto">
            <div className="flex justify-between border-b border-slate-700 pb-2 mb-2">
              <span>column: Dynamic_Urgency.py</span>
              <span className="text-slate-500">Python 3.9</span>
            </div>
            <pre className="whitespace-pre-wrap">
{`def calculate_urgency(words_left):
  avg_speed = 1200
  days_needed = words_left / avg_speed
  
  # Days until Deadline (Fixed: 14 days)
  days_available = 14 
  
  deficit = days_needed - days_available
  
  if deficit > 0:
    return `}<span className={`${stats.status === UrgencyStatus.CRITICAL ? 'font-bold text-red-400 scale-110' : 'text-slate-500'} transition-all`}>"CRITICAL"</span>
{`
  elif days_available - days_needed < 3:
    return `}<span className={`${stats.status === UrgencyStatus.HIGH ? 'font-bold text-yellow-400 scale-110' : 'text-slate-500'} transition-all`}>"HIGH"</span>
{`
  else:
    return `}<span className={`${stats.status === UrgencyStatus.NORMAL ? 'font-bold text-green-400 scale-110' : 'text-slate-500'} transition-all`}>"NORMAL"</span>
            </pre>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-stone-200 rounded-xl border-2 border-dashed border-stone-300 p-8">
          <h4 className="font-bold text-sm uppercase tracking-wide text-stone-500 mb-6">Live Kanban View</h4>
          
          <div className={`bg-white w-full max-w-sm rounded-lg shadow-lg border-l-8 p-5 transition-all duration-300 ${
            stats.status === UrgencyStatus.CRITICAL ? 'border-red-500 pulse-critical' : 
            stats.status === UrgencyStatus.HIGH ? 'border-yellow-500' : 'border-green-500'
          }`}>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h5 className="font-bold text-lg text-stone-800">Chapter 7: The Descent</h5>
                <span className="text-xs text-stone-400">ID: #4922</span>
              </div>
              <span className={`px-2 py-1 rounded text-xs font-bold ${
                stats.status === UrgencyStatus.CRITICAL ? 'bg-red-100 text-red-800' : 
                stats.status === UrgencyStatus.HIGH ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
              }`}>
                {stats.status} {stats.deficit > 0 && `: ${stats.deficit.toFixed(1)} Day Deficit`}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="text-sm text-stone-600">
                Words Remaining: <span className="font-mono">{stats.remaining.toLocaleString()}</span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-2.5">
                <div 
                  className="bg-stone-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${(currentWords / CONSTS.TARGET_WORDS) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-stone-400 flex justify-between mt-2">
                <span>Est. Days Needed: <span className="font-bold text-stone-600">{stats.daysNeeded.toFixed(1)}</span></span>
                <span>Deadline: 14 Days</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-100 flex justify-between items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-[10px]">TH</div>
                <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[10px]">SA</div>
              </div>
              <button 
                disabled={stats.status !== UrgencyStatus.NORMAL}
                className={`text-white text-xs px-3 py-2 rounded transition ${
                  stats.status === UrgencyStatus.NORMAL ? 'bg-stone-800 hover:bg-stone-700' : 'bg-stone-400 cursor-not-allowed opacity-50'
                }`}
              >
                Send to Editor
              </button>
            </div>
          </div>

          <div className={`mt-6 text-sm font-serif italic text-center ${
            stats.status === UrgencyStatus.CRITICAL ? 'text-red-600 font-bold' : 
            stats.status === UrgencyStatus.HIGH ? 'text-amber-600' : 'text-stone-500'
          }`}>
            {stats.status === UrgencyStatus.CRITICAL ? 'Status: Project mathematically impossible at current pace.' : 
             stats.status === UrgencyStatus.HIGH ? 'Status: Risk of failure. Increase pace immediately.' : 
             'Status: On Track. No intervention needed.'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
