"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, Sparkles, UploadCloud, ChevronLeft, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

const steps = [
  { id: 'basics', title: 'Basics' },
  { id: 'story', title: 'Story' },
  { id: 'funding', title: 'Funding Goal' },
  { id: 'media', title: 'Media Upload' },
  { id: 'rewards', title: 'Rewards' },
  { id: 'verify', title: 'Verification' },
  { id: 'publish', title: 'Publish' },
];

export default function CreateCampaign() {
  const [currentStep, setCurrentStep] = useState(0)
  const router = useRouter();

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Create Campaign</h1>
            <Button variant="outline" className="text-muted-foreground border-white/10" onClick={() => router.push('/dashboard')}>Save Draft</Button>
          </div>
          
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/5 rounded-full z-0"></div>
            <motion.div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0"
              initial={{ width: '0%' }}
              animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            
            {steps.map((step, index) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  index <= currentStep ? 'bg-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-black/50 border border-white/10 text-muted-foreground'
                }`}>
                  {index < currentStep ? <CheckCircle2 size={16} /> : index + 1}
                </div>
                <span className={`text-xs absolute -bottom-6 whitespace-nowrap ${index <= currentStep ? 'text-primary' : 'text-muted-foreground hidden md:block'}`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Form Area */}
        <Card className="min-h-[400px] flex flex-col mt-12 bg-black/40 border-white/10 backdrop-blur-xl">
          <CardContent className="flex-1 p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col justify-center"
              >
                
                {currentStep === 0 && (
                  <div className="space-y-6 max-w-xl mx-auto w-full">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold mb-2">Let's start with the basics</h2>
                      <p className="text-muted-foreground">What are you building? Keep it simple and clear.</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Campaign Title</label>
                      <Input placeholder="e.g., Quantum Computing Framework for Students" className="h-14 text-lg bg-black/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Category</label>
                      <select className="flex h-14 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option>Technology & Hardware</option>
                        <option>Software & Apps</option>
                        <option>Environment</option>
                        <option>Games</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-6 max-w-xl mx-auto w-full">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2">Tell your story <Sparkles className="text-accent"/></h2>
                      <p className="text-muted-foreground">AI can help you write a compelling description.</p>
                    </div>
                    <div className="space-y-2 relative">
                      <textarea 
                        className="w-full h-48 rounded-xl border border-white/10 bg-black/50 p-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Describe why you are building this and why people should care..."
                      ></textarea>
                      <Button variant="outline" className="absolute bottom-4 right-4 gap-2 text-accent border-accent/20 bg-accent/10 hover:bg-accent/20">
                        <Sparkles size={16}/> AI Enhance
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6 max-w-xl mx-auto w-full text-center">
                    <h2 className="text-2xl font-bold mb-2">Set your funding goal</h2>
                    <p className="text-muted-foreground mb-8">How much do you need to bring this project to life?</p>
                    
                    <div className="relative max-w-xs mx-auto">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-bold text-muted-foreground">₹</span>
                      <input 
                        type="number" 
                        className="w-full h-24 rounded-2xl border-2 border-primary/30 bg-primary/5 text-center text-5xl font-bold text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="50000"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6 max-w-xl mx-auto w-full text-center">
                    <h2 className="text-2xl font-bold mb-8">Upload Campaign Media</h2>
                    <div className="border-2 border-dashed border-white/20 rounded-2xl p-12 hover:bg-white/5 transition-colors cursor-pointer flex flex-col items-center justify-center group">
                       <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                         <UploadCloud size={32} className="text-muted-foreground group-hover:text-primary transition-colors"/>
                       </div>
                       <h3 className="text-lg font-medium mb-1">Click to upload cover image</h3>
                       <p className="text-sm text-muted-foreground">High resolution PNG or JPG (max 5MB)</p>
                    </div>
                  </div>
                )}

                {currentStep >= 4 && currentStep < 6 && (
                   <div className="flex flex-col items-center justify-center text-center space-y-4">
                     <h2 className="text-2xl font-bold">Premium SaaS Mockup</h2>
                     <p className="text-muted-foreground max-w-sm">
                       This step is visually mocked for the UI demonstration. In a full production backend, this would save to the database.
                     </p>
                   </div>
                )}

                {currentStep === 6 && (
                   <div className="flex flex-col items-center justify-center text-center space-y-6">
                     <div className="w-24 h-24 rounded-full bg-success/20 flex items-center justify-center text-success mb-2">
                       <Rocket size={48} />
                     </div>
                     <h2 className="text-4xl font-bold">Ready to Launch!</h2>
                     <p className="text-muted-foreground max-w-md text-lg">
                       Your campaign looks incredible. You are ready to join thousands of student innovators on RaiseNest.
                     </p>
                   </div>
                )}

              </motion.div>
            </AnimatePresence>
          </CardContent>

          {/* Footer Controls */}
          <div className="border-t border-white/5 p-6 flex justify-between bg-black/20">
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={currentStep === 0}
              className="gap-2"
            >
              <ChevronLeft size={16}/> Back
            </Button>
            
            {currentStep < steps.length - 1 ? (
              <Button onClick={nextStep} variant="premium" className="gap-2 px-8">
                Continue <ChevronRight size={16}/>
              </Button>
            ) : (
              <Button onClick={() => router.push('/dashboard')} variant="premium" className="gap-2 px-8 bg-success hover:bg-success/90 border-transparent shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                Launch Campaign <Rocket size={16}/>
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
