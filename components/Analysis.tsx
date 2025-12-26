
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CAPABILITY_DATA, COST_DATA } from '../constants';

const Analysis: React.FC = () => {
  return (
    <section id="analysis" className="scroll-mt-24 space-y-12">
      <div className="border-l-4 border-stone-800 pl-6">
        <h3 className="text-2xl font-serif font-bold mb-2">II. The Analytical Breakdown</h3>
        <p className="text-stone-600">A quantitative assessment of cost, scalability, and capability.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm h-[500px] flex flex-col">
          <h4 className="text-lg font-bold mb-2 text-center">Capability Matrix</h4>
          <p className="text-xs text-center text-stone-500 mb-8 text-pretty">Comparing core platform attributes (Scale 1-10)</p>
          
          <div className="flex-grow w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={CAPABILITY_DATA} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                <PolarGrid stroke="#e7e5e4" />
                <PolarAngleAxis dataKey="attribute" tick={{ fontSize: 11, fill: '#44403c' }} />
                <Radar
                  name="Airtable"
                  dataKey="airtable"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
                <Radar
                  name="Grist"
                  dataKey="grist"
                  stroke="#d97706"
                  fill="#d97706"
                  fillOpacity={0.4}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Tooltip 
                   contentStyle={{ borderRadius: '8px', border: '1px solid #e7e5e4', fontSize: '12px' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm h-[500px] flex flex-col">
          <h4 className="text-lg font-bold mb-2 text-center">The Cost of Scale</h4>
          <p className="text-xs text-center text-stone-500 mb-8">Annual Cost for a 20-Person Team (USD)</p>
          
          <div className="flex-grow w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COST_DATA} margin={{ top: 10, right: 30, left: 20, bottom: 40 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={(val) => `$${val}`} />
                <Tooltip 
                   cursor={{ fill: 'transparent' }}
                   formatter={(value) => [`$${(value as number).toLocaleString()}`, 'Annual Cost']}
                   contentStyle={{ borderRadius: '8px', border: '1px solid #e7e5e4', fontSize: '12px' }}
                />
                <Bar dataKey="cost" fill="#8884d8" radius={[4, 4, 0, 0]}>
                  {COST_DATA.map((entry, index) => (
                    <rect 
                      key={`bar-${index}`} 
                      fill={index === 0 ? '#3b82f6' : '#d97706'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between items-center border-b border-stone-100 pb-2">
              <span>Airtable (Business)</span>
              <span className="font-mono font-bold text-stone-800">$12,960 / yr</span>
            </div>
            <div className="flex justify-between items-center border-b border-stone-100 pb-2">
              <span>Grist (Pro)</span>
              <span className="font-mono font-bold text-stone-800">$1,920 / yr</span>
            </div>
            <div className="flex justify-between items-center text-stone-500 text-xs mt-2">
              <span>*Airtable Record Limit: 125k</span>
              <span>*Grist Record Limit: ~500k+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
