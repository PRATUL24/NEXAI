import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-sm">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase">AI-Powered Living</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black font-heading tracking-tighter text-white mb-6 leading-none neon-text">
          FUTURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-600">
            INTELLIGENCE
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light">
          Experience the synergy of advanced robotics and artificial intelligence. 
          Your home, calibrated for perfection.
        </p>
        
        <div className="mt-10 flex justify-center gap-6">
          <button className="group relative px-8 py-4 bg-white text-black font-bold text-lg tracking-widest overflow-hidden hover:bg-gray-200 transition-all clip-path-slant">
            <span className="relative z-10 flex items-center gap-2">
              SHOP SERIES X <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-bold text-lg tracking-widest hover:bg-white/5 transition-all">
            WATCH DEMO
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <ChevronDown className="h-8 w-8" />
      </div>
    </div>
  );
};