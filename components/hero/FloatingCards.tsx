"use client";

import React from "react";
import { motion } from "framer-motion";
import { Droplet, Stethoscope, Laptop, Leaf } from "lucide-react";

export default function FloatingCards() {
  return (
    <>
      {/* Top Left Floating Card */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-12 z-30 hidden lg:flex bg-card/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
          <Droplet size={18} />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium">Clean Water</p>
          <p className="font-bold text-sm text-foreground">Funded in 4h</p>
        </div>
      </motion.div>

      {/* Bottom Right Floating Card */}
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-16 -right-8 z-30 hidden lg:flex bg-card/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-2xl items-center gap-3"
      >
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 border-2 border-background" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-background" />
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 border-2 border-background" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground font-medium">Top Creators</p>
          <p className="font-bold text-sm text-foreground">Live Now</p>
        </div>
      </motion.div>

      {/* Top Right Floating Tech Card */}
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, 1, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -top-20 right-10 z-10 hidden xl:flex bg-card/40 backdrop-blur-sm border border-white/5 p-3 rounded-2xl shadow-xl items-center gap-3 opacity-60"
      >
        <div className="w-8 h-8 rounded-lg bg-white/5 text-muted-foreground flex items-center justify-center">
          <Laptop size={14} />
        </div>
        <p className="text-xs font-medium text-muted-foreground">Tech & Innovation</p>
      </motion.div>
    </>
  );
}
