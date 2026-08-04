"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Target } from "lucide-react";
import CountUp from "react-countup";

export default function LiveFundingCard() {
  const targetValue = 875000;
  const progressPercent = 82; // (875000 / 1000000) * 100 approximate

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-md bg-card/60 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-2 border border-primary/30">
              Live Campaign
            </div>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">AI Drone Assistant</h3>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
            <span className="font-bold text-xl">🤖</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">Total Raised</p>
              <div className="text-4xl font-black text-foreground flex items-center tracking-tighter">
                ₹<CountUp end={targetValue} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Goal</p>
              <p className="text-sm font-bold text-foreground">₹10,00,000</p>
            </div>
          </div>

          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary via-cyan-400 to-accent"
            />
            {/* Shimmer effect on progress bar */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
            />
          </div>
          <div className="flex justify-between text-xs font-bold text-primary">
            <span>{progressPercent}% Funded</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground">
              <Users size={14} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Backers</p>
              <p className="font-bold text-sm">254</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground">
              <Clock size={14} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Time Left</p>
              <p className="font-bold text-sm">12 Days</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
