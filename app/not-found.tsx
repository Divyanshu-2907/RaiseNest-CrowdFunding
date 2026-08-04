"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative z-10 text-center max-w-lg px-6"
      >
        <div className="flex justify-center mb-6">
           <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-primary shadow-[0_0_50px_rgba(37,99,235,0.2)]">
             <AlertTriangle size={48} />
           </div>
        </div>

        <h1 className="text-8xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4">Page not found</h2>
        <p className="text-muted-foreground text-lg mb-10">
          Oops! The campaign or page you are looking for has been moved, deleted, or never existed in the first place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="premium" className="w-full sm:w-auto h-12 px-8 gap-2">
              <Home size={18} /> Return Home
            </Button>
          </Link>
          <Link href="/explore">
            <Button variant="outline" className="w-full sm:w-auto h-12 px-8 gap-2 bg-white/5">
              <Search size={18} /> Explore Campaigns
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
