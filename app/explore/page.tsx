"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Filter, TrendingUp, Sparkles, Heart } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MOCK_CAMPAIGNS } from '@/lib/mockData'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["All", "Technology", "Design", "Games", "Environment", "HealthTech", "Education"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCampaigns = MOCK_CAMPAIGNS.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.tags.join(" ").toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      
      {/* Search Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Explore Campaigns</h1>
            <p className="text-muted-foreground">Discover the next big thing built by student innovators.</p>
          </div>
          
          <div className="w-full md:w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search projects, tags, or creators... ⌘K" 
              className="pl-12 rounded-full bg-white/5 border-white/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2 rounded-full"><Filter size={14}/> Filters</Button>
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          {categories.map(cat => (
            <Badge 
              key={cat} 
              variant={activeCategory === cat ? "default" : "outline"}
              className="cursor-pointer text-sm px-4 py-1"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Masonry Grid (Simulated with columns) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredCampaigns.map((campaign, i) => (
            <motion.div 
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-white/5 bg-white/5 hover:border-white/20 transition-all cursor-pointer"
            >
              <Link href={`/${campaign.creator.username}`}>
                <div className="relative">
                  <Image 
                    src={campaign.image} 
                    alt={campaign.title} 
                    width={500} 
                    height={Math.floor(Math.random() * (400 - 250 + 1) + 250)} // Random heights for masonry effect
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:text-accent">
                      <Heart size={18} />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    <Badge variant="secondary" className="text-[10px]">{campaign.category}</Badge>
                    {campaign.raised >= campaign.goal && <Badge variant="success" className="text-[10px]"><TrendingUp size={10} className="mr-1"/> Funded</Badge>}
                  </div>
                  
                  <h3 className="font-bold text-lg leading-tight mb-2 group-hover:text-primary transition-colors">{campaign.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{campaign.description}</p>
                  
                  <div className="w-full bg-black/40 h-1.5 rounded-full mb-2 overflow-hidden">
                    <div className="bg-primary h-full" style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}></div>
                  </div>
                  <div className="flex justify-between text-xs font-medium mb-4">
                    <span className="text-foreground">₹{campaign.raised.toLocaleString()} raised</span>
                    <span className="text-muted-foreground">{Math.round((campaign.raised / campaign.goal) * 100)}%</span>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                    <Avatar className="w-6 h-6 border-none">
                      <AvatarImage src={`https://github.com/${campaign.creator.username}.png`} />
                      <AvatarFallback>CR</AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">by {campaign.creator.name}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <Sparkles size={48} className="text-muted-foreground/30 mb-4" />
            <h3 className="text-xl font-bold mb-2">No campaigns found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            <Button variant="outline" className="mt-6" onClick={() => {setSearchQuery(""); setActiveCategory("All")}}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  )
}
