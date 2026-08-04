"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import confetti from "canvas-confetti";
import { 
  ArrowRight, Sparkles, TrendingUp, Users, ShieldCheck, 
  BarChart, Globe, Zap, Bookmark, Heart, Share2, 
  ChevronDown, ArrowUpRight, Plus, MapPin, CheckCircle2,
  Rocket, Target, Clock, User
} from "lucide-react";
import HeroSection from "@/components/hero/HeroSection";

import { useRouter } from "next/navigation";

// --- ANIMATION VARIANTS ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

export default function Home() {
  const router = useRouter();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2563EB', '#7C3AED', '#06B6D4', '#22C55E']
    });
    setTimeout(() => {
      router.push("/campaigns/create");
    }, 500);
  };

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. LIVE STATS */}
      <section className="w-full py-20 border-y border-white/10 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          >
            {[
              { label: "Funds Raised", value: 25000000, prefix: "₹", suffix: "+", formatter: (val: number) => (val/10000000).toFixed(1) + "Cr" },
              { label: "Backers", value: 12000, suffix: "+" },
              { label: "Projects", value: 850, suffix: "+" },
              { label: "Success Rate", value: 96, suffix: "%" },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="flex flex-col gap-2">
                <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight flex justify-center items-center">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2.5} separator="," formattingFn={stat.formatter} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TRENDING CAMPAIGNS */}
      <section className="w-full py-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-primary font-semibold tracking-wider uppercase text-sm">Trending Now</motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold tracking-tight">Campaigns making waves.</motion.h2>
          </div>
          <Link href="/explore" className="group flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium transition-colors">
            View all campaigns <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Eco-Friendly Smart Backpack", category: "Technology", author: "Alex River", raised: 450000, goal: 500000, days: 12, img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80" },
            { title: "AI Powered Medical Assistant", category: "Healthcare", author: "Dr. Sarah", raised: 820000, goal: 1000000, days: 5, img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" },
            { title: "Next-Gen Autonomous Drone", category: "Robotics", author: "Tech Labs", raised: 1200000, goal: 1000000, days: 0, img: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80" },
          ].map((campaign, i) => {
            const progress = Math.min((campaign.raised / campaign.goal) * 100, 100);
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col"
              >
                <div className="w-full h-48 relative overflow-hidden bg-white/5">
                  <Image src={campaign.img} alt={campaign.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10">{campaign.category}</div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <button className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors"><Heart size={14} /></button>
                    <button className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-md flex items-center justify-center hover:bg-white text-white hover:text-black transition-colors"><Bookmark size={14} /></button>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{campaign.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2"><User size={14}/> by {campaign.author}</p>
                  </div>
                  
                  <div className="mt-auto space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-foreground">₹{(campaign.raised/1000).toFixed(0)}k raised</span>
                      <span className="text-muted-foreground">{progress.toFixed(0)}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: `${progress}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}
                        className={`h-full rounded-full ${progress >= 100 ? 'bg-success' : 'bg-primary'}`}
                      />
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground pt-2 border-t border-white/5">
                      <span className="flex items-center gap-1.5"><Target size={14}/> Goal: ₹{(campaign.goal/1000).toFixed(0)}k</span>
                      <span className="flex items-center gap-1.5"><Clock size={14}/> {campaign.days > 0 ? `${campaign.days} days left` : 'Funded'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 4. FEATURES (BENTO GRID) */}
      <section className="w-full py-32 bg-black relative">
        <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Everything you need to succeed.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Built with cutting-edge technology to give creators the best tools to launch, manage, and grow their campaigns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-5xl mx-auto h-auto md:h-[600px]">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-colors" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6"><BarChart size={24}/></div>
                <h3 className="text-2xl font-bold mb-2">Real-time Analytics</h3>
                <p className="text-muted-foreground max-w-md">Track your funding progress, visitor demographics, and conversion rates in real-time with our powerful dashboard.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6"><ShieldCheck size={24}/></div>
                <h3 className="text-2xl font-bold mb-2">Secure Payments</h3>
                <p className="text-muted-foreground">Frictionless, bank-grade secure payments powered by Razorpay.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6"><Globe size={24}/></div>
                <h3 className="text-2xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Accept funds from backers worldwide effortlessly.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-card to-card/50 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-success/20 blur-[80px] rounded-full group-hover:bg-success/30 transition-colors" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-12 h-12 bg-success/20 rounded-xl flex items-center justify-center text-success mb-6"><Zap size={24}/></div>
                <h3 className="text-2xl font-bold mb-2">Instant Withdrawals</h3>
                <p className="text-muted-foreground max-w-md">Once your campaign hits its goal, withdraw funds instantly to your bank account with zero hidden fees.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (TIMELINE) */}
      <section className="w-full py-32 container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How it works.</h2>
          <p className="text-muted-foreground">Four simple steps to turn your idea into reality.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          {[
            { step: 1, title: "Create Campaign", desc: "Set up your project page with images, videos, and a compelling story.", icon: <Plus size={20}/> },
            { step: 2, title: "Verify Identity", desc: "Complete a quick automated KYC to ensure trust and safety.", icon: <ShieldCheck size={20}/> },
            { step: 3, title: "Receive Funding", desc: "Share your campaign and watch the community back your idea.", icon: <TrendingUp size={20}/> },
            { step: 4, title: "Build Your Dream", desc: "Withdraw funds and start building. Keep your backers updated.", icon: <Rocket size={20}/> },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
            >
              <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-card border-[4px] border-background flex items-center justify-center text-foreground z-10 md:-translate-x-1/2 shadow-xl shadow-primary/20">
                {item.icon}
              </div>
              <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <div className="text-primary font-bold mb-2">Step {item.step}</div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CATEGORIES */}
      <section className="w-full py-20 border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h3 className="text-center text-sm font-semibold tracking-widest text-muted-foreground uppercase mb-10">Discover by Category</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Technology', 'AI', 'Robotics', 'Education', 'Healthcare', 'Gaming', 'Environment', 'IoT', 'FinTech'].map((cat, i) => (
              <motion.button 
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-colors text-sm font-medium backdrop-blur-sm"
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SUCCESS STORIES (CAROUSEL) */}
      <section className="w-full py-32 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Student Success Stories</h2>
          <p className="text-muted-foreground">See what others have achieved with RaiseNest.</p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <div className="bg-card border border-white/10 p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex gap-1 text-yellow-500 mb-6">{"★".repeat(5)}</div>
                  <p className="text-foreground text-lg mb-8 flex-1 italic">"RaiseNest helped me fund my IoT smart home project in just 2 weeks. The platform is incredibly intuitive and the community is supportive."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold">SM</div>
                    <div>
                      <h5 className="font-bold">Sarah Mitchell</h5>
                      <p className="text-xs text-muted-foreground">MIT Student • Raised ₹1.5L</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="w-full py-32 bg-black/50 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do I start a campaign?", a: "Simply sign up, click 'Start Campaign', and fill out the details about your project, goal, and timeline. It takes less than 5 minutes." },
              { q: "Are there any hidden fees?", a: "No! We only charge a standard 5% platform fee + payment gateway processing fees. You keep what you raise." },
              { q: "Is it restricted to students?", a: "While RaiseNest is optimized for student innovators, anyone with a great idea can launch a campaign." },
              { q: "How do I receive the funds?", a: "Once your campaign reaches its goal or time limit, funds are automatically transferred to your verified bank account." }
            ].map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-card/50">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between font-medium text-left hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} size={18}/>
                </button>
                {activeFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BLOCK */}
      <section className="w-full py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Launch Your Dream?
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground max-w-2xl mb-10">
            Join thousands of creators who have turned their ideas into reality on RaiseNest.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            onClick={handleConfetti}
            className="group px-8 py-4 bg-foreground text-background font-bold rounded-full text-lg hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-2"
          >
            Start Your Campaign <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
