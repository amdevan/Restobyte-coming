/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  UtensilsCrossed, 
  ChefHat, 
  LineChart, 
  Clock, 
  ArrowRight, 
  CheckCircle2,
  Mail,
  Search,
  Bell,
  LayoutDashboard,
  Receipt,
  PieChart,
  Settings,
  Plus
} from 'lucide-react';

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force video to play and loop regardless of browser policies
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      
      const attemptPlay = () => {
        video.play().catch(error => {
          console.error("Video autoplay failed:", error);
          // Retry playing after a short delay if it fails
          setTimeout(attemptPlay, 1000);
        });
      };
      
      attemptPlay();

      // Backup loop enforcement
      const handleEnded = () => {
        video.currentTime = 0;
        attemptPlay();
      };
      
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, you would send this to your backend
    }
  };

  const features = [
    {
      icon: <ChefHat className="w-6 h-6 text-brand-500" />,
      title: "Kitchen Display System",
      description: "Seamlessly connect front-of-house with the kitchen. Reduce ticket times and eliminate lost orders."
    },
    {
      icon: <LineChart className="w-6 h-6 text-brand-500" />,
      title: "Real-time Analytics",
      description: "Track sales, inventory, and labor costs in real-time. Make data-driven decisions to boost your margins."
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-500" />,
      title: "Staff Scheduling",
      description: "AI-powered scheduling that predicts busy shifts and optimizes your labor costs automatically."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-brand-500/30 selection:text-brand-200 overflow-x-hidden">
      
      {/* Video Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-zinc-950">
        <iframe
          src="https://www.youtube.com/embed/ZNxoUU7yN-M?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=ZNxoUU7yN-M&playsinline=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-60 mix-blend-screen"
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>
      {/* Gradient overlays - very light to keep video highly visible */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-b from-zinc-950/30 via-zinc-950/10 to-zinc-950/80" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-r from-zinc-950/50 via-transparent to-zinc-950/50" />
      
      {/* Brand color accents */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] z-0 pointer-events-none rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="fixed bottom-[20%] right-[-10%] w-[40%] h-[40%] z-0 pointer-events-none rounded-full bg-brand-800/20 blur-[120px]" />

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-6 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/20">
            <UtensilsCrossed className="w-6 h-6 text-white" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight">Resto<span className="text-brand-500">Byte</span></span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a href="#waitlist" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
            Join Waitlist
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 pt-12 pb-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          Launching Early 2027
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-none leading-[1.1] mb-8"
        >
          The operating system for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600">
            modern restaurants.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-12 leading-relaxed drop-shadow-md"
        >
          Resto Byte is the all-in-one platform that streamlines your operations, 
          empowers your staff, and delivers unforgettable dining experiences.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div 
          id="waitlist"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-md mb-20"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email" 
                  required
                  className="w-full pl-12 pr-4 py-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-white placeholder:text-zinc-500"
                />
              </div>
              <button 
                type="submit"
                className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(234,57,6,0.3)] hover:shadow-[0_0_30px_rgba(234,57,6,0.5)]"
              >
                Get Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 p-4 bg-brand-500/20 backdrop-blur-md border border-brand-500/30 rounded-xl text-brand-300"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">You're on the list! We'll be in touch soon.</span>
            </motion.div>
          )}
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-5xl mx-auto rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden text-left"
        >
          {/* Mockup Header */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3 bg-zinc-900/50">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex items-center gap-2 text-zinc-400">
                <Search className="w-4 h-4" />
                <span className="text-xs font-medium">Search orders, tables, or menu items...</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="w-4 h-4 text-zinc-400" />
              <div className="w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-[10px] font-bold text-white">
                JD
              </div>
            </div>
          </div>

          {/* Mockup Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[400px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col gap-6 border-r border-zinc-800/80 p-4 col-span-2 bg-zinc-900/20">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 text-brand-400 bg-brand-500/10 px-3 py-2 rounded-lg">
                  <LayoutDashboard className="w-4 h-4" />
                  <span className="text-sm font-medium">Overview</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 px-3 py-2 rounded-lg transition-colors">
                  <Receipt className="w-4 h-4" />
                  <span className="text-sm font-medium">Orders</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 px-3 py-2 rounded-lg transition-colors">
                  <PieChart className="w-4 h-4" />
                  <span className="text-sm font-medium">Reports</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 px-3 py-2 rounded-lg transition-colors">
                  <Settings className="w-4 h-4" />
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="col-span-1 md:col-span-10 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Active Orders Column */}
              <div className="lg:col-span-2 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-lg">Active Orders</h3>
                  <button className="flex items-center gap-1 text-xs font-medium bg-brand-600 hover:bg-brand-500 text-white px-3 py-1.5 rounded-lg transition-colors">
                    <Plus className="w-3 h-3" /> New Order
                  </button>
                </div>
                
                <div className="grid gap-3">
                  {[
                    { table: "Table 04", items: "2x Truffle Burger, 1x Fries", status: "Cooking", time: "12 min", color: "text-amber-400", bg: "bg-amber-400/10" },
                    { table: "Table 12", items: "1x Caesar Salad, 2x Iced Tea", status: "Ready", time: "2 min", color: "text-emerald-400", bg: "bg-emerald-400/10" },
                    { table: "Takeaway #89", items: "3x Margherita Pizza", status: "Preparing", time: "5 min", color: "text-blue-400", bg: "bg-blue-400/10" },
                  ].map((order, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-zinc-800/50 bg-zinc-900/40">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm text-zinc-200">{order.table}</span>
                          <span className="text-xs text-zinc-500">• {order.time}</span>
                        </div>
                        <p className="text-xs text-zinc-400">{order.items}</p>
                      </div>
                      <div className={`px-2.5 py-1 rounded-md text-[10px] font-medium ${order.color} ${order.bg}`}>
                        {order.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Column */}
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-semibold text-lg">Today's Overview</h3>
                
                <div className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/40 flex flex-col gap-1">
                  <span className="text-xs text-zinc-400 font-medium">Total Revenue</span>
                  <span className="text-2xl font-display font-bold text-zinc-100">$4,289.50</span>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400 mt-1">
                    <LineChart className="w-3 h-3" />
                    <span>+12.5% from yesterday</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-900/40 flex flex-col gap-1">
                  <span className="text-xs text-zinc-400 font-medium">Orders Completed</span>
                  <span className="text-2xl font-display font-bold text-zinc-100">142</span>
                </div>

                {/* Mini Chart Mockup */}
                <div className="mt-auto pt-4 flex items-end gap-2 h-24">
                  {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                    <div key={i} className="flex-1 bg-brand-500/20 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 w-full bg-brand-500 rounded-t-sm transition-all duration-500"
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </main>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Everything you need to run your restaurant</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">From the front of house to the back office, Resto Byte connects every part of your business.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 hover:bg-zinc-900 hover:border-brand-500/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-500/10 transition-all">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-zinc-100">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-50">
            <UtensilsCrossed className="w-5 h-5" />
            <span className="font-display font-bold tracking-tight">RestoByte</span>
          </div>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Resto Byte Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
