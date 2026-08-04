"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Target, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const STORIES = [
  {
    title: "The Eco-Friendly Smart Backpack",
    creator: "Alex River",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    raised: "₹1,250,000",
    goal: "₹500,000",
    backers: 450,
    quote: "RaiseNest didn't just give us funding; it gave us a community of early adopters who believed in sustainable tech.",
  },
  {
    title: "AI Powered Medical Assistant",
    creator: "Dr. Sarah Chen",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    raised: "₹3,400,000",
    goal: "₹1,000,000",
    backers: 1200,
    quote: "The frictionless payment experience and verified badges helped us build immediate trust with our medical backers.",
  },
  {
    title: "Next-Gen Autonomous Drone",
    creator: "Tech Labs Init",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80",
    raised: "₹2,800,000",
    goal: "₹1,000,000",
    backers: 890,
    quote: "From launch to funding, the creator dashboard gave us unprecedented analytics that guided our marketing strategy.",
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Wall of Fame
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ideas That Took Flight</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Discover the incredible projects that started as a simple idea and grew into funded reality through the RaiseNest community.
          </p>
        </motion.div>

        {/* Stories List */}
        <div className="space-y-24">
          {STORIES.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image 
                    src={story.image} 
                    alt={story.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-4 mb-4">
                      <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-center flex-1">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Raised</p>
                        <p className="text-lg font-bold text-success">{story.raised}</p>
                      </div>
                      <div className="bg-background/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-center flex-1">
                        <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Goal</p>
                        <p className="text-lg font-bold text-foreground">{story.goal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">{story.title}</h2>
                <p className="text-primary font-medium flex items-center gap-2">
                   By {story.creator}
                </p>
                <blockquote className="text-xl text-muted-foreground italic border-l-4 border-primary/50 pl-6 my-8">
                  "{story.quote}"
                </blockquote>
                
                <div className="flex items-center gap-8 text-sm text-muted-foreground mb-8">
                   <div className="flex items-center gap-2">
                     <Heart className="text-rose-500" size={18} /> {story.backers} Backers
                   </div>
                   <div className="flex items-center gap-2">
                     <TrendingUp className="text-success" size={18} /> Fully Funded
                   </div>
                   <div className="flex items-center gap-2">
                     <Target className="text-primary" size={18} /> Goal Crushed
                   </div>
                </div>

                <Link href={`/explore`} className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-medium transition-colors">
                  Explore similar projects <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 rounded-3xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to write your own story?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of creators who have successfully funded their ideas on RaiseNest. Start building your campaign today.
            </p>
            <Link href="/campaigns/create" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Start a Campaign
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
