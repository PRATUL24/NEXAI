import React, { useState, useEffect } from 'react';
import { Wifi, Zap, Smartphone, ShieldCheck, Play, Loader2, Scan, Activity, Cpu, Home, Sun, Lock } from 'lucide-react';

export const DemoVideo: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Animation sequence loop
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 4500); // 4.5 seconds per scene

    return () => clearInterval(interval);
  }, [isPlaying]);

  const scenes = [
    {
      title: "SYSTEM CALIBRATION",
      subtitle: "Analyzing Environment...",
      icon: Scan,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      visual: (
        <div className="relative w-48 h-48 border border-sky-500/30 rounded-full flex items-center justify-center animate-pulse">
           <div className="absolute inset-0 border-t-2 border-sky-400 rounded-full animate-spin"></div>
           <Scan className="h-16 w-16 text-sky-400" />
           <div className="absolute -bottom-8 text-xs font-mono text-sky-400">SCANNING...</div>
        </div>
      )
    },
    {
      title: "CENTRAL COMMAND",
      subtitle: "NEXAI Home Assistant Active",
      icon: Cpu,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      visual: (
        <div className="relative flex items-center justify-center h-48 w-48">
           {/* Central Hub */}
           <div className="z-20 bg-zinc-900 border border-indigo-500 p-4 rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.4)] relative">
              <Home className="h-8 w-8 text-indigo-400" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
           </div>
           
           {/* Orbiting Automation Scenarios */}
           <div className="absolute animate-[spin_8s_linear_infinite] w-40 h-40 border border-dashed border-zinc-700 rounded-full">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 p-1 rounded-full border border-yellow-500/50">
                 <Sun className="h-4 w-4 text-yellow-500" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-zinc-900 p-1 rounded-full border border-red-500/50">
                 <Lock className="h-4 w-4 text-red-500" />
              </div>
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-zinc-900 p-1 rounded-full border border-green-500/50">
                 <Zap className="h-4 w-4 text-green-500" />
              </div>
           </div>
           
           {/* Connecting Lines */}
           <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-32 h-32 border border-indigo-500/30 rounded-full animate-ping duration-1000"></div>
           </div>
        </div>
      )
    },
    {
      title: "SMART CONNECTIVITY",
      subtitle: "Syncing with NEXAI Hub...",
      icon: Wifi,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      visual: (
         <div className="relative">
            <Smartphone className="h-32 w-32 text-gray-600" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <Wifi className="h-12 w-12 text-purple-400 animate-ping" />
            </div>
            <div className="absolute -right-12 top-0 bg-zinc-800 p-2 rounded text-xs text-green-400 border border-green-500/30">
               CONNECTED
            </div>
         </div>
      )
    },
    {
      title: "ENERGY OPTIMIZATION",
      subtitle: "Maximizing Efficiency...",
      icon: Zap,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      visual: (
        <div className="flex items-end gap-2 h-32 w-48">
           <div className="w-8 bg-zinc-800 h-1/3 rounded-t animate-[pulse_1s_ease-in-out_infinite]"></div>
           <div className="w-8 bg-zinc-800 h-1/2 rounded-t animate-[pulse_1.5s_ease-in-out_infinite]"></div>
           <div className="w-8 bg-zinc-800 h-2/3 rounded-t animate-[pulse_2s_ease-in-out_infinite]"></div>
           <div className="w-8 bg-green-500 h-full rounded-t shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
           <div className="w-8 bg-zinc-800 h-3/4 rounded-t animate-[pulse_1.2s_ease-in-out_infinite]"></div>
        </div>
      )
    },
    {
      title: "ACTIVE PROTECTION",
      subtitle: "Warranty & Support Active",
      icon: ShieldCheck,
      color: "text-green-400",
      bg: "bg-green-500/10",
      visual: (
         <div className="relative">
            <ShieldCheck className="h-40 w-40 text-green-500 transition-all duration-500" />
            <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-full animate-pulse"></div>
         </div>
      )
    }
  ];

  const currentScene = scenes[step];

  return (
    <section className="py-20 bg-zinc-950 border-b border-zinc-800 overflow-hidden">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
             
             {/* Text Side */}
             <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10">
                   <Play className="h-3 w-3 text-purple-400 fill-purple-400" />
                   <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">Product Demo</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight">
                   SEE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-600">FUTURE</span> IN ACTION
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                   Watch how NEXAI appliances autonomously adapt to your lifestyle, centered around the new <strong>Home Assistance Hub</strong>.
                </p>
                <button className="text-white font-bold tracking-widest border-b border-sky-500 pb-1 hover:text-sky-400 transition-colors">
                   EXPLORE FEATURES &rarr;
                </button>
             </div>

             {/* Animated Player */}
             <div className="flex-1 w-full max-w-xl">
                <div className="aspect-video bg-black border border-zinc-700 rounded-xl overflow-hidden relative shadow-[0_0_40px_rgba(0,0,0,0.5)] group">
                   
                   {/* Screen Content */}
                   <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black">
                      {/* Grid Background */}
                      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                      
                      {/* Scene Transition */}
                      <div className="relative z-10 flex flex-col items-center">
                         <div className="mb-8 transform transition-all duration-500 scale-110">
                            {currentScene.visual}
                         </div>
                         <h3 className={`text-2xl font-heading font-bold mb-2 ${currentScene.color} transition-colors duration-300`}>
                            {currentScene.title}
                         </h3>
                         <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                            {currentScene.subtitle}
                         </p>
                      </div>

                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 h-1 bg-zinc-800 w-full">
                         <div 
                           className="h-full bg-sky-500 transition-all duration-300 ease-linear"
                           style={{ width: `${((step + 1) / 5) * 100}%` }}
                         ></div>
                      </div>
                   </div>

                   {/* Controls Overlay */}
                   <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all transform hover:scale-110"
                      >
                         {isPlaying ? <span className="font-bold text-xs">PAUSE</span> : <Play className="h-8 w-8 fill-current" />}
                      </button>
                   </div>
                </div>
                
                {/* Steps Indicators */}
                <div className="flex justify-between mt-6 px-2">
                   {scenes.map((scene, idx) => {
                      const Icon = scene.icon;
                      return (
                         <div 
                           key={idx}
                           onClick={() => setStep(idx)}
                           className={`flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 ${step === idx ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70'}`}
                         >
                            <div className={`p-2 rounded-full ${step === idx ? 'bg-zinc-800 text-white border border-zinc-600' : 'text-gray-500'}`}>
                               <Icon className="h-5 w-5" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:block">{scene.title.split(' ')[0]}</span>
                         </div>
                      );
                   })}
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};