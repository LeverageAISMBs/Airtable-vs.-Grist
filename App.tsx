
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PhilosophyCard from './components/PhilosophyCard';
import Analysis from './components/Analysis';
import Simulator from './components/Simulator';
import Verdict from './components/Verdict';
import Footer from './components/Footer';
import { PHILOSOPHIES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-32">
        <Hero />

        {/* Philosophy Section */}
        <section id="philosophy" className="scroll-mt-24">
          <div className="border-l-4 border-stone-800 pl-6 mb-8">
            <h3 className="text-2xl font-serif font-bold mb-2">I. Two Distinct Philosophies</h3>
            <p className="text-stone-600">Explore the fundamental difference in approach. Click on a philosophy to reveal its core DNA.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PHILOSOPHIES.map((p) => (
              <PhilosophyCard key={p.id} data={p} />
            ))}
          </div>
        </section>

        <Analysis />

        <Simulator />

        <Verdict />
      </main>

      <Footer />
    </div>
  );
};

export default App;
