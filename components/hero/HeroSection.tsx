"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Code, CheckCircle2 } from "lucide-react";
import LiveFundingCard from "./LiveFundingCard";
import DonationFeed from "./DonationFeed";
import FloatingCards from "./FloatingCards";
import AIAssistantBubble from "./AIAssistantBubble";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and perspective transformations tied to scroll
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-background">
      
      {/* 1. ANIMATED BACKGROUND LAYER */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none">
        {/* Animated Aurora Gradients */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full mix-blend-screen opacity-50"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full mix-blend-screen opacity-50"
        />
        
        {/* Subtle Noise Texture overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[70vh]">
          
          {/* 2. LEFT SIDE: COPY & CTAs */}
          <motion.div 
            style={{ opacity }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-xl"
          >
            {/* Premium Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit backdrop-blur-md shadow-[0_0_20px_rgba(37,99,235,0.15)]"
            >
              <Sparkles size={16} />
              <span className="text-sm font-semibold tracking-wide">AI-Powered Crowdfunding Platform</span>
            </motion.div>

            {/* Ultra-short Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              Launch Ideas. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary bg-[200%_auto] animate-[shimmer_3s_linear_infinite]">Build the Future.</span>
            </h1>

            {/* Magnetic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/campaigns/create" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative group overflow-hidden px-8 py-4 bg-foreground text-background font-bold rounded-full flex items-center justify-center gap-2 shadow-2xl shadow-white/10"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite] mix-blend-overlay" />
                  Start Campaign <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <Link href="/explore" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-8 py-4 bg-white/5 border border-white/10 text-foreground font-bold rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  Explore Projects
                </motion.button>
              </Link>
            </div>

            {/* Trust Indicators & Partner Logos */}
            <div className="pt-8 mt-4 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                <div><p className="text-2xl font-bold text-foreground">5000+</p><p className="text-xs text-muted-foreground uppercase font-semibold">Students</p></div>
                <div><p className="text-2xl font-bold text-foreground">₹2.5Cr</p><p className="text-xs text-muted-foreground uppercase font-semibold">Raised</p></div>
                <div><p className="text-2xl font-bold text-foreground">850+</p><p className="text-xs text-muted-foreground uppercase font-semibold">Campaigns</p></div>
                <div><p className="text-2xl font-bold text-foreground text-success">96%</p><p className="text-xs text-muted-foreground uppercase font-semibold">Success Rate</p></div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-1 font-bold text-lg"><Code size={20}/> GitHub</div>
                <div className="flex items-center gap-1 font-bold text-lg"><CheckCircle2 size={20}/> Microsoft Learn</div>
                <div className="flex items-center gap-1 font-bold text-lg">Google DSC</div>
              </div>
            </div>
          </motion.div>

          {/* 3. RIGHT SIDE: LIVE PREMIUM DASHBOARD (3D Transform) */}
          <motion.div 
            style={{ rotateX, scale }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative perspective-[2000px] flex justify-center lg:justify-end"
          >
            {/* The Main 3D Container */}
            <motion.div 
              whileHover={{ rotateX: 0, rotateY: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full max-w-[500px] aspect-[4/5] bg-card/40 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-6 shadow-2xl flex flex-col justify-center items-center"
              style={{ transformStyle: "preserve-3d", transform: "rotateX(10deg) rotateY(-10deg)" }}
            >
              {/* Internal Glass Highlights */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/30 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />
              
              {/* Nested Interactive Elements */}
              <LiveFundingCard />
              <DonationFeed />
              <FloatingCards />
              
            </motion.div>
          </motion.div>
          
        </div>
      </div>

      {/* 4. AI ASSISTANT BUBBLE */}
      <AIAssistantBubble />

    </section>
  );
}
