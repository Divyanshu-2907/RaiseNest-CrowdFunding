"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

const DONATIONS = [
  { id: 1, name: "Rahul", amount: "₹500", project: "AI Tutor", time: "Just now" },
  { id: 2, name: "Sarah", amount: "₹1200", project: "Clean Water", time: "2s ago" },
  { id: 3, name: "Ananya", amount: "₹2500", project: "Medical Robot", time: "5s ago" },
  { id: 4, name: "Vikram", amount: "₹800", project: "Solar Backpack", time: "12s ago" },
  { id: 5, name: "Priya", amount: "₹5000", project: "EduTech", time: "20s ago" },
];

export default function DonationFeed() {
  const [currentDonation, setCurrentDonation] = useState(DONATIONS[0]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
      setCurrentDonation(DONATIONS[Math.floor(Math.random() * DONATIONS.length)]);
    }, 4000); // New donation every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-10 right-10 z-40 hidden md:block w-72">
      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-card/80 backdrop-blur-md border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white shrink-0">
            <Heart size={16} className="fill-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">
              <span className="font-bold">{currentDonation.name}</span> donated <span className="text-success font-bold">{currentDonation.amount}</span>
            </p>
            <p className="text-xs text-muted-foreground truncate">
              to {currentDonation.project} • {currentDonation.time}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
