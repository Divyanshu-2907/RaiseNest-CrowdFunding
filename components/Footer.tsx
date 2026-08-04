import React from "react";
import Link from "next/link";
import { Globe, Mail, MessageSquare, Share2, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 text-sm text-muted-foreground overflow-hidden relative">
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_50%_50%_at_50%_120%,rgba(37,99,235,0.1),rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo size={28} className="group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">RaiseNest</span>
            </Link>
            <p className="max-w-xs text-muted-foreground leading-relaxed">
              Turn your ideas into funded reality. The platform for student innovators to connect with backers globally.
            </p>
            <div className="space-y-3">
              <h4 className="text-foreground font-medium">Subscribe to our newsletter</h4>
              <div className="flex max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full text-foreground outline-none focus:border-primary transition-colors"
                />
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-medium tracking-wide uppercase text-xs">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/explore" className="hover:text-foreground transition-colors">Explore</Link></li>
              <li><Link href="/success-stories" className="hover:text-foreground transition-colors">Success Stories</Link></li>
              <li><Link href="/creators" className="hover:text-foreground transition-colors">For Creators</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-medium tracking-wide uppercase text-xs">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-foreground transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-foreground font-medium tracking-wide uppercase text-xs">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookie" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link href="/trust" className="hover:text-foreground transition-colors">Trust & Safety</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
          <p>© {new Date().getFullYear()} RaiseNest Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Share2 size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={18} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageSquare size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}