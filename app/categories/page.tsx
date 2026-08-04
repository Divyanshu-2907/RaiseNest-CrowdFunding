"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, Stethoscope, Rocket, Gamepad2, Palette, Leaf, Music, Video, ArrowRight } from "lucide-react";

const CATEGORIES = [
  { name: "Technology", icon: <Cpu size={32} />, color: "from-blue-500 to-cyan-400", count: 124 },
  { name: "Healthcare", icon: <Stethoscope size={32} />, color: "from-rose-500 to-pink-500", count: 86 },
  { name: "Robotics", icon: <Rocket size={32} />, color: "from-indigo-500 to-purple-500", count: 42 },
  { name: "Games", icon: <Gamepad2 size={32} />, color: "from-green-500 to-emerald-400", count: 215 },
  { name: "Art & Design", icon: <Palette size={32} />, color: "from-amber-500 to-orange-400", count: 189 },
  { name: "Environment", icon: <Leaf size={32} />, color: "from-teal-500 to-emerald-500", count: 76 },
  { name: "Music", icon: <Music size={32} />, color: "from-fuchsia-500 to-pink-500", count: 156 },
  { name: "Film", icon: <Video size={32} />, color: "from-slate-600 to-slate-400", count: 93 },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Explore Categories</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover innovative projects across every industry. From next-gen hardware to independent films, find the ideas that resonate with you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/explore?category=${cat.name.toLowerCase()}`}>
                <div className="group relative bg-card border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-white/20 transition-all cursor-pointer shadow-lg hover:shadow-2xl h-full flex flex-col justify-between">
                  <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${cat.color} rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cat.count} active campaigns</p>
                  </div>

                  <div className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Browse Projects <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
