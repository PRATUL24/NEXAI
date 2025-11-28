import React, { useState, useEffect } from 'react';
import { ShoppingBag, Zap, Sparkles, Eye, X, Check, Loader2, Bot } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { generateProductImage } from '../services/geminiService';
import { getImage, saveImage } from '../utils/imageStorage';

const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({ product, onClose }) => {
  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-zinc-900 border border-zinc-700 w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-full transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 bg-zinc-800 relative min-h-[300px]">
           <img 
             src={product.image} 
             alt={product.name}
             className="w-full h-full object-cover"
           />
           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">AI Enhanced</span>
              </div>
           </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
          <span className="text-sky-500 font-bold tracking-widest text-xs uppercase mb-2">{product.category}</span>
          <h2 className="text-3xl font-heading font-bold text-white mb-4">{product.name}</h2>
          
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-2xl font-bold text-white">₹{product.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{(product.price * 1.2).toLocaleString()}</span>
            <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-400 text-xs font-bold rounded">SAVE 20%</span>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Key Features</h4>
            <ul className="space-y-3">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 bg-sky-500/20 rounded-full">
                    <Check className="h-3 w-3 text-sky-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6 border-t border-zinc-800 flex gap-4">
             <button className="flex-1 bg-white text-black font-bold py-4 uppercase tracking-wider hover:bg-sky-400 hover:text-white transition-all">
               Add to Cart
             </button>
             <button className="px-6 border border-zinc-600 hover:border-white hover:bg-white/5 transition-all">
               <ShoppingBag className="h-5 w-5" />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product; onQuickView: () => void; isGenerating?: boolean }> = ({ product, onQuickView, isGenerating }) => {
  return (
    <div className="group relative bg-zinc-900 border border-zinc-800 overflow-hidden hover:border-purple-500/50 transition-all duration-500 h-full flex flex-col">
      {/* Image Container */}
      <div className="aspect-square w-full overflow-hidden bg-zinc-800 relative cursor-pointer" onClick={onQuickView}>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 z-10 pointer-events-none"></div>
        
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isGenerating ? 'opacity-50 blur-sm' : 'animate-fadeIn'}`}
        />

        {/* AI Generating Overlay */}
        {isGenerating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
             <Loader2 className="h-8 w-8 text-sky-400 animate-spin mb-2" />
             <span className="text-xs font-bold text-sky-400 tracking-widest uppercase animate-pulse">Generating Visuals...</span>
          </div>
        )}

        <div className="absolute top-4 right-4 z-20 bg-black/80 backdrop-blur px-3 py-1 border border-white/10">
          <span className="text-xs font-bold text-white tracking-widest">{product.category}</span>
        </div>
        
        {/* Overlay Button */}
        <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <button className="bg-black/50 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-sky-500 hover:border-sky-500 transition-all transform translate-y-4 group-hover:translate-y-0">
              <Eye className="h-4 w-4" /> Quick View
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative z-20 -mt-12 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white font-heading mb-1 group-hover:text-purple-400 transition-colors cursor-pointer" onClick={onQuickView}>
          {product.name}
        </h3>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-sm text-gray-400">₹</span>
          <span className="text-xl font-bold text-white">{product.price.toLocaleString()}</span>
        </div>

        <p className="text-gray-400 text-sm mb-6 line-clamp-2 min-h-[40px]">
          {product.description}
        </p>

        <div className="mt-auto flex gap-4">
          <button className="flex-1 bg-white text-black font-bold py-3 uppercase tracking-wider text-sm hover:bg-gray-200 transition-colors">
            Buy Now
          </button>
          <button 
            onClick={onQuickView}
            className="p-3 border border-zinc-700 hover:border-sky-500 hover:text-sky-500 text-gray-400 transition-colors"
            title="Quick View"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(1.05); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
            animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productImages, setProductImages] = useState<Record<string, string>>({});
  const [generatingStatus, setGeneratingStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const loadImages = async () => {
      // Iterate over products to check DB or generate
      for (const product of PRODUCTS) {
        try {
          // 1. Check IndexedDB
          const cachedUrl = await getImage(product.id);
          
          if (cachedUrl) {
            setProductImages(prev => ({ ...prev, [product.id]: cachedUrl }));
          } else {
            // 2. Generate if not cached
            setGeneratingStatus(prev => ({ ...prev, [product.id]: true }));
            
            // Generate in background
            generateProductImage(product.name, product.category, product.description)
              .then(async (url) => {
                if (url) {
                  await saveImage(product.id, url);
                  setProductImages(prev => ({ ...prev, [product.id]: url }));
                }
              })
              .catch(err => {
                console.error(`Failed to generate image for ${product.name}:`, err);
              })
              .finally(() => {
                setGeneratingStatus(prev => ({ ...prev, [product.id]: false }));
              });
          }
        } catch (error) {
          console.error("Error loading product images:", error);
        }
      }
    };

    loadImages();
  }, []);

  return (
    <section id="products" className="py-24 bg-black relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
              THE <span className="text-purple-500">LINEUP</span>
            </h2>
            <p className="text-gray-400">Next-gen appliances available today.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
            VIEW ALL SPECS <Zap className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => {
            const displayProduct = {
               ...product,
               image: productImages[product.id] || product.image
            };
            
            return (
              <ProductCard 
                key={product.id} 
                product={displayProduct} 
                onQuickView={() => setSelectedProduct(displayProduct)}
                isGenerating={generatingStatus[product.id]}
              />
            );
          })}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={{
            ...selectedProduct,
            image: productImages[selectedProduct.id] || selectedProduct.image
          }} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};
