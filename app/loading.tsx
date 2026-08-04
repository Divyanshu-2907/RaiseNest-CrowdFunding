"use client";

import React from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8"
      >
        {/* Pulsating Logo Container */}
        <motion.div
          animate={{
            boxShadow: [
              "0px 0px 0px 0px rgba(0, 240, 255, 0.4)",
              "0px 0px 40px 10px rgba(0, 240, 255, 0)",
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full bg-background border border-white/5 p-4 shadow-2xl"
        >
          <Logo size={64} animated />
        </motion.div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full bg-gradient-to-r from-primary via-accent to-primary"
          />
        </div>
      </motion.div>
    </div>
  );
}
