import React from 'react';
import { Brain, ShieldCheck, Wrench, Smartphone } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap: Record<string, React.FC<any>> = {
  Brain,
  ShieldCheck,
  Wrench,
  Smartphone
};

export const Features: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-zinc-900 border-y border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            CORE <span className="text-sky-500">ADVANTAGES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Engineered with proprietary neural processing units for unmatched efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index} 
                className="group p-8 bg-zinc-950/50 border border-zinc-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="mb-6 inline-flex p-3 bg-zinc-900 rounded-lg text-sky-400 group-hover:text-sky-300 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};