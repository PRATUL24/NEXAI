import React, { useState, useEffect } from 'react';
import { Brain, Zap, Wifi, Activity, CheckCircle2, Server, Globe } from 'lucide-react';

export const NeuralCoreSection: React.FC = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isOptimizing) {
      setProgress(0);
      interval = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
    } else {
        setProgress(0);
    }
    return () => clearInterval(interval);
  }, [isOptimizing]);

  return (
    <section className="py-24 bg-black relative overflow-hidden border-b border-zinc-800">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 mb-6">
              <Activity className="h-4 w-4 text-sky-400 animate-pulse" />
              <span className="text-sky-400 text-xs font-bold tracking-widest uppercase">Live System Architecture</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 leading-tight">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-600">NEURAL CORE</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At the heart of every NEXAI appliance lies a proprietary neural processing unit. 
              It continuously analyzes usage patterns, environmental data, and energy grids to 
              autonomously optimize performance in real-time.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">System Status</span>
                    <span className={`text-sm font-bold uppercase tracking-wider ${isOptimizing && progress < 100 ? 'text-yellow-400' : progress === 100 ? 'text-green-400' : 'text-sky-400'}`}>
                        {progress === 100 ? 'Optimized' : isOptimizing ? 'Processing...' : 'Standby'}
                    </span>
                </div>
                
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mb-6">
                    <div 
                        className="h-full bg-gradient-to-r from-sky-500 to-purple-500 transition-all duration-300"
                        style={{ width: `${isOptimizing ? progress : 5}%` }}
                    ></div>
                </div>

                <button 
                    onClick={() => setIsOptimizing(true)}
                    disabled={isOptimizing && progress < 100}
                    className={`w-full py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                        progress === 100 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default'
                        : 'bg-white text-black hover:bg-sky-400 hover:text-white'
                    }`}
                >
                    {progress === 100 ? (
                        <>
                           <CheckCircle2 className="h-5 w-5" /> All Systems Nominal
                        </>
                    ) : (
                        <>
                           <Zap className="h-5 w-5" /> Initialize Optimization
                        </>
                    )}
                </button>
            </div>
          </div>

          {/* Interactive Visual */}
          <div className="relative h-[500px] flex items-center justify-center">
             {/* Central Core */}
             <div className="relative z-20">
                <div className={`absolute inset-0 bg-sky-500/30 rounded-full blur-[50px] transition-all duration-1000 ${isOptimizing ? 'scale-150 opacity-80' : 'scale-100 opacity-30'}`}></div>
                <div className={`relative z-10 w-32 h-32 bg-zinc-900 border-2 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.3)] transition-colors duration-500 ${isOptimizing ? 'border-purple-500' : 'border-sky-500/50'}`}>
                    <Brain className={`h-16 w-16 transition-all duration-500 ${isOptimizing ? 'animate-pulse text-purple-400' : 'text-sky-400'}`} />
                </div>
             </div>

             {/* Orbiting Nodes */}
             {[0, 90, 180, 270].map((deg, i) => {
                 const Icons = [Wifi, Server, Globe, Zap];
                 const Icon = Icons[i];
                 return (
                    <div 
                        key={i}
                        className="absolute z-10"
                        style={{ 
                            transform: `rotate(${deg}deg) translate(180px) rotate(-${deg}deg)` 
                        }}
                    >
                        <div className={`w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center transition-all duration-500 group cursor-pointer hover:border-sky-400 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] ${isOptimizing ? 'border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.4)]' : ''}`}>
                            <Icon className={`h-6 w-6 transition-colors ${isOptimizing ? 'text-sky-400' : 'text-gray-500 group-hover:text-white'}`} />
                        </div>
                    </div>
                 );
             })}
             
             {/* Connecting Lines (SVG) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <defs>
                   <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                      <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                      <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
                   </linearGradient>
                </defs>
                <g className="opacity-50">
                    {/* Top Node (270deg) - Center to Top */}
                    <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#lineGradient)" strokeWidth="2" className={isOptimizing ? 'animate-dash-fast' : 'animate-dash-slow'} strokeDasharray="10 10" />
                    {/* Bottom Node (90deg) - Center to Bottom */}
                    <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="url(#lineGradient)" strokeWidth="2" className={isOptimizing ? 'animate-dash-fast' : 'animate-dash-slow'} strokeDasharray="10 10" />
                    {/* Left Node (180deg) - Center to Left */}
                    <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className={isOptimizing ? 'animate-dash-fast' : 'animate-dash-slow'} strokeDasharray="10 10" />
                    {/* Right Node (0deg) - Center to Right */}
                    <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" className={isOptimizing ? 'animate-dash-fast' : 'animate-dash-slow'} strokeDasharray="10 10" />
                </g>
             </svg>

             {/* Orbital Ring */}
             <div className={`absolute inset-0 border border-white/5 rounded-full scale-[0.7] transition-all duration-1000 ${isOptimizing ? 'animate-[spin_2s_linear_infinite] border-sky-500/20' : 'animate-[spin_10s_linear_infinite]'}`}></div>
             <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.7] rotate-45 animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .animate-dash-slow {
          animation: dash 2s linear infinite;
        }
        .animate-dash-fast {
          animation: dash 0.5s linear infinite;
        }
      `}</style>
    </section>
  );
};