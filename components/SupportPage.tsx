import React, { useState } from 'react';
import { Search, Phone, Mail, FileText, Wrench, Download, MessageSquare, ChevronDown, CheckCircle, Send, Loader2, Cpu, Video, Settings, Wifi } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    issue: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', model: '', issue: '' });
      
      // Reset status after showing success message
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const scrollToService = () => {
    const element = document.getElementById('service-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      {/* Hero Search */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-16">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">How can we assist you?</h1>
            <div className="relative max-w-xl mx-auto">
               <input 
                  type="text" 
                  placeholder="Search for manuals, error codes, or help topics..."
                  className="w-full bg-black/50 border border-zinc-700 rounded-full py-4 pl-12 pr-6 text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
               />
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         
         {/* Quick Actions Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-sky-500/50 hover:bg-zinc-900 transition-all cursor-pointer group">
               <FileText className="h-8 w-8 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold mb-2">Product Manuals</h3>
               <p className="text-gray-400 text-sm">Download guides for your NEXAI devices.</p>
            </div>
            
            <div 
               onClick={scrollToService}
               className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-sky-500/50 hover:bg-zinc-900 transition-all cursor-pointer group"
            >
               <Wrench className="h-8 w-8 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold mb-2">Schedule Service</h3>
               <p className="text-gray-400 text-sm">Book a technician visit.</p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-sky-500/50 hover:bg-zinc-900 transition-all cursor-pointer group">
               <CheckCircle className="h-8 w-8 text-sky-500 mb-4 group-hover:scale-110 transition-transform" />
               <h3 className="text-xl font-bold mb-2">Warranty Status</h3>
               <p className="text-gray-400 text-sm">Check your coverage details.</p>
            </div>
         </div>

         {/* Support Information */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-12">
               
               {/* NEW: Dedicated Home Assistance Section */}
               <div className="bg-zinc-900/50 border border-indigo-500/30 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-indigo-500/20 rounded-lg">
                      <Cpu className="h-6 w-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold">Home Assistance Support Center</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                     <div className="bg-black/40 border border-zinc-800 p-4 rounded-lg hover:border-indigo-500/50 transition-colors">
                        <Settings className="h-5 w-5 text-indigo-400 mb-2" />
                        <h4 className="font-bold mb-1">Hub Setup Guide</h4>
                        <p className="text-sm text-gray-400 mb-3">Step-by-step instructions to initialize your central command.</p>
                        <a href="#" className="text-xs text-indigo-400 font-bold uppercase hover:underline">Read Guide &rarr;</a>
                     </div>
                     <div className="bg-black/40 border border-zinc-800 p-4 rounded-lg hover:border-indigo-500/50 transition-colors">
                        <Wifi className="h-5 w-5 text-indigo-400 mb-2" />
                        <h4 className="font-bold mb-1">Automation Tutorials</h4>
                        <p className="text-sm text-gray-400 mb-3">Learn to create 'Good Morning' and 'Security' routines.</p>
                        <a href="#" className="text-xs text-indigo-400 font-bold uppercase hover:underline">Watch Video &rarr;</a>
                     </div>
                  </div>

                  <div>
                     <h4 className="font-bold text-sm text-gray-400 uppercase tracking-wider mb-4">Common Hub Solutions</h4>
                     <div className="space-y-3">
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                           <p><strong>Device Pairing:</strong> Ensure devices are in pairing mode (holding power for 5s) before scanning.</p>
                        </div>
                        <div className="flex items-start gap-3 text-sm text-gray-300">
                           <div className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                           <p><strong>Voice Commands:</strong> If unresponsive, check microphone mute status on the top panel.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* FAQs */}
               <div>
                  <h2 className="text-2xl font-heading font-bold mb-8 flex items-center gap-2">
                     <MessageSquare className="h-6 w-6 text-purple-500" /> Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                     {[
                        { q: "How do I connect my appliance to the NEXAI app?", a: "Download the NEXAI Hub app, create an account, and tap 'Add Device'. Follow the on-screen scanning process to pair via Bluetooth." },
                        { q: "What does the 'Neural Optimization' mode do?", a: "It uses AI to analyze your usage patterns and environmental factors to automatically adjust settings for maximum energy efficiency." },
                        { q: "How do I claim my 2-year warranty?", a: "Log in to your account, navigate to 'My Devices', select the product, and click 'File Claim'. Our AI will assess the issue immediately." },
                        { q: "Where can I find replacement parts?", a: "Genuine parts can be ordered directly through the app or by visiting an authorized service center listed on this page." },
                        { q: "Does the Home Assistance Hub work without Wi-Fi?", a: "Basic local control functions remain active via Bluetooth Mesh, but remote access and AI updates require an internet connection." }
                     ].map((faq, idx) => (
                        <div key={idx} className="border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 bg-zinc-900/30">
                           <button className="flex justify-between items-center w-full text-left font-bold text-gray-200">
                              {faq.q}
                              <ChevronDown className="h-4 w-4 text-gray-500" />
                           </button>
                           <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                              {faq.a}
                           </p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Service Request Form */}
               <div id="service-form" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2 relative z-10">
                     <Wrench className="h-6 w-6 text-sky-500" /> Request Service
                  </h2>
                  
                  {formStatus === 'success' ? (
                     <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                           <CheckCircle className="h-8 w-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                        <p className="text-gray-400 max-w-sm">
                           Our AI system has logged your request. A technician will be assigned and will contact you within 2 hours.
                        </p>
                     </div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                              <input 
                                 type="text" 
                                 name="name"
                                 required
                                 value={formData.name}
                                 onChange={handleChange}
                                 className="w-full bg-black/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-sky-500 focus:outline-none transition-colors"
                                 placeholder="Enter your name"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone Number</label>
                              <input 
                                 type="tel" 
                                 name="phone"
                                 required
                                 value={formData.phone}
                                 onChange={handleChange}
                                 className="w-full bg-black/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-sky-500 focus:outline-none transition-colors"
                                 placeholder="+91 98765 43210"
                              />
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                              <input 
                                 type="email" 
                                 name="email"
                                 required
                                 value={formData.email}
                                 onChange={handleChange}
                                 className="w-full bg-black/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-sky-500 focus:outline-none transition-colors"
                                 placeholder="name@example.com"
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Product Model</label>
                              <select 
                                 name="model"
                                 required
                                 value={formData.model}
                                 onChange={handleChange}
                                 className="w-full bg-black/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-sky-500 focus:outline-none transition-colors"
                              >
                                 <option value="" disabled>Select a product</option>
                                 <option value="ha-01">NEXAI Home Assistance Hub</option>
                                 <option value="ac-01">NEXAI Breeze X1 (AC)</option>
                                 <option value="wm-01">NEXAI Wash Pro (Washing Machine)</option>
                                 <option value="ap-01">NEXAI Pure (Air Purifier)</option>
                                 <option value="vr-01">NEXAI Bot V3 (Vacuum)</option>
                                 <option value="rf-01">NEXAI FrostGuard (Refrigerator)</option>
                                 <option value="other">Other Legacy Model</option>
                              </select>
                           </div>
                        </div>

                        <div className="space-y-2">
                           <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Issue Description</label>
                           <textarea 
                              name="issue"
                              required
                              value={formData.issue}
                              onChange={handleChange}
                              rows={4}
                              className="w-full bg-black/50 border border-zinc-700 rounded-lg p-3 text-white focus:border-sky-500 focus:outline-none transition-colors resize-none"
                              placeholder="Please describe the problem you are facing..."
                           ></textarea>
                        </div>

                        <button 
                           type="submit" 
                           disabled={formStatus === 'submitting'}
                           className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-sky-400 hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                           {formStatus === 'submitting' ? (
                              <>
                                 <Loader2 className="h-5 w-5 animate-spin" /> Processing Request...
                              </>
                           ) : (
                              <>
                                 <Send className="h-5 w-5" /> SUBMIT REQUEST
                              </>
                           )}
                        </button>
                     </form>
                  )}
               </div>
            </div>

            {/* Sidebar Contact */}
            <div className="space-y-8">
               <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 rounded-xl sticky top-24">
                  <h3 className="font-bold text-lg mb-4 text-white">Contact Support</h3>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-sky-500/10 rounded-lg">
                           <Phone className="h-5 w-5 text-sky-400" />
                        </div>
                        <div>
                           <p className="text-xs text-gray-400 uppercase tracking-wider">24/7 Hotline</p>
                           <p className="font-bold">1-800-NEXAI-AI</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="p-2 bg-purple-500/10 rounded-lg">
                           <Mail className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                           <p className="text-xs text-gray-400 uppercase tracking-wider">Email Us</p>
                           <p className="font-bold">support@nexai.com</p>
                        </div>
                     </div>
                  </div>
                  <button className="w-full mt-6 bg-white text-black font-bold py-3 rounded hover:bg-sky-400 hover:text-white transition-colors">
                     START LIVE CHAT
                  </button>
               </div>

               <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                  <h3 className="font-bold text-lg mb-4 text-white">Downloads</h3>
                  <div className="space-y-3">
                     <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                        <Download className="h-4 w-4 group-hover:text-sky-400" /> User Manuals
                     </a>
                     <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                        <Download className="h-4 w-4 group-hover:text-sky-400" /> Driver Updates
                     </a>
                     <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                        <Download className="h-4 w-4 group-hover:text-sky-400" /> App (iOS / Android)
                     </a>
                     {/* Added Home Assist manual link */}
                     <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group">
                        <Video className="h-4 w-4 group-hover:text-sky-400" /> Setup Video Tutorials
                     </a>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
};