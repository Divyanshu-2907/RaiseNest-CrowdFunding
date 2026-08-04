"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Logo } from '@/components/ui/logo'

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  const handleMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock loading state
    setTimeout(() => setIsLoading(false), 1500);
  };

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center bg-background"><Sparkles className="animate-spin text-primary" size={32}/></div>;
  }

  return (
    <div className="min-h-screen w-full flex bg-background">
      
      {/* Left Form Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 relative z-10">
        
        {/* Glow Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-10">
            <Link href="/" className="inline-flex items-center gap-3 font-bold text-3xl mb-8 hover:opacity-80 transition-opacity">
              <Logo size={40} animated /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent tracking-tight">RaiseNest</span>
            </Link>
            <h1 className="text-3xl font-bold mb-3 tracking-tight">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to your account to continue building your dream project.</p>
          </div>

          <div className="space-y-4">
            <Button 
              variant="outline" 
              className="w-full h-12 text-base gap-3 bg-white/5 hover:bg-white/10 border-white/10"
              onClick={() => signIn("github")}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              Continue with GitHub
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-12 text-base gap-3 bg-white/5 hover:bg-white/10 border-white/10 opacity-50 cursor-not-allowed"
              disabled
            >
              <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google (Soon)
            </Button>
          </div>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Or</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <form onSubmit={handleMagicLink} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Email address</label>
              <Input 
                type="email" 
                placeholder="you@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-white/5 border-white/10 focus-visible:ring-primary/50"
              />
            </div>
            <Button variant="premium" className="w-full h-12 text-base gap-2" type="submit" disabled={isLoading}>
              {isLoading ? <Sparkles className="animate-spin" size={18}/> : <><Mail size={18} /> Send Magic Link</>}
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-8">
            By signing in, you agree to our <Link href="#" className="underline hover:text-primary">Terms of Service</Link> and <Link href="#" className="underline hover:text-primary">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>

      {/* Right Showcase Section (Hidden on Mobile) */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-black flex-col justify-between p-12 border-l border-white/5">
        <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564" alt="Abstract 3D Background" fill className="object-cover opacity-40 blur-[2px] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        
        <div className="relative z-10 flex justify-end w-full">
           <Badge variant="outline" className="bg-black/50 backdrop-blur-md border-white/10 px-4 py-1.5"><ShieldCheck size={14} className="mr-2 text-success"/> Secure Authentication</Badge>
        </div>

        <div className="relative z-10 max-w-lg mt-auto">
          <blockquote className="text-2xl font-medium leading-relaxed mb-6">
            "RaiseNest gave us the platform to fund our quantum computing simulator when traditional investors said it was too early. The community here is incredible."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
               <Image src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Chen" width={48} height={48} className="object-cover" />
            </div>
            <div>
              <p className="font-bold text-lg">Sarah Chen</p>
              <p className="text-primary text-sm font-medium">Funded ₹1,500,000 in 2026</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
