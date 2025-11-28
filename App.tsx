import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Products } from './components/Products';
import { ChatWidget } from './components/ChatWidget';
import { NeuralCoreSection } from './components/NeuralCoreSection';
import { SupportPage } from './components/SupportPage';
import { DemoVideo } from './components/DemoVideo';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC<{ onViewChange: (view: 'home' | 'support') => void }> = ({ onViewChange }) => {
  const handleLinkClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    if (section === 'support') {
      onViewChange('support');
      window.scrollTo(0, 0);
    } else {
      onViewChange('home');
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-heading font-black text-white mb-6 tracking-widest">NEXAI</h2>
            <p className="text-gray-500 max-w-sm mb-6">
              Pioneering the domestication of advanced artificial intelligence. 
              Designing the homes of tomorrow, today.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                 <a key={social} href="#" className="text-gray-400 hover:text-sky-400 text-sm font-bold uppercase tracking-wider transition-colors">
                   {social}
                 </a>
               ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider">PRODUCTS</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-sky-400 transition-colors">Washing Machines</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-sky-400 transition-colors">Air Purifiers</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-sky-400 transition-colors">Vacuum Robots</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-sky-400 transition-colors">Smart Cooling</button></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-bold mb-6 tracking-wider">SUPPORT</h4>
             <ul className="space-y-4 text-sm text-gray-400">
              <li><button onClick={(e) => handleLinkClick(e, 'support')} className="hover:text-sky-400 transition-colors">Documentation</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'support')} className="hover:text-sky-400 transition-colors">Warranty Claim</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'support')} className="hover:text-sky-400 transition-colors">Service Centers</button></li>
              <li><button onClick={(e) => handleLinkClick(e, 'support')} className="hover:text-sky-400 transition-colors">Contact AI</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">© 2024 NEXAI INDUSTRIES. ALL SYSTEMS NOMINAL.</p>
          <div className="flex gap-6">
             <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">PRIVACY POLICY</a>
             <a href="#" className="text-gray-600 text-xs hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'support'>('home');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-sky-500/30 selection:text-sky-200">
      <Navbar currentView={view} onViewChange={setView} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <DemoVideo />
            <Features />
            <NeuralCoreSection />
            <Products />
            
            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-sky-900/20 to-purple-900/20 border-y border-white/5">
              <div className="max-w-4xl mx-auto px-4 text-center">
                 <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 neon-text">
                   UPGRADE YOUR REALITY
                 </h2>
                 <p className="text-xl text-gray-300 mb-10">
                   Join 50,000+ homes already operating on the NEXAI network.
                 </p>
                 <button className="bg-white text-black px-10 py-4 font-bold text-lg hover:bg-sky-400 hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]">
                   GET STARTED <ArrowUpRight className="h-6 w-6" />
                 </button>
              </div>
            </section>
          </>
        ) : (
          <SupportPage />
        )}
      </main>

      <Footer onViewChange={setView} />
      <ChatWidget />
    </div>
  );
};

export default App;
