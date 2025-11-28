import React, { useState } from 'react';
import { Menu, X, Cpu, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'support';
  onViewChange: (view: 'home' | 'support') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    if (section === 'support') {
      onViewChange('support');
      window.scrollTo(0, 0);
    } else {
      onViewChange('home');
      // If we are navigating to a section, wait for render then scroll
      if (section !== 'home') {
        setTimeout(() => {
          const el = document.getElementById(section);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2 bg-sky-500/10 rounded-full group-hover:bg-sky-500/20 transition-colors">
              <Cpu className="h-8 w-8 text-sky-400 neon-text" />
            </div>
            <span className="text-3xl font-heading font-black tracking-widest text-white group-hover:text-sky-400 transition-colors">
              NEXAI
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Products', id: 'products' }, 
                { name: 'Technology', id: 'technology' }, 
                { name: 'Support', id: 'support' }, 
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                    (currentView === 'support' && item.id === 'support') 
                      ? 'text-sky-400' 
                      : 'text-gray-300 hover:text-sky-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
             <button className="p-2 text-gray-300 hover:text-sky-400 transition-colors">
                <ShoppingCart className="h-6 w-6" />
             </button>
             <button className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-2 rounded-none skew-x-[-10deg] font-bold tracking-wider transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <span className="skew-x-[10deg] block">LOGIN</span>
             </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {['Products', 'Technology', 'Support'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item}
                </button>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};
