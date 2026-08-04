

"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Search, Menu, X, Rocket, ChevronDown, User, LogOut, LayoutDashboard } from "lucide-react";
import { Command } from "cmdk";
import { Logo } from "@/components/ui/logo";

const NAV_LINKS = [
  { name: "Explore", href: "/explore" },
  { name: "Categories", href: "/categories" },
  { name: "Success Stories", href: "/success-stories" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-md border-b border-white/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Left: Logo & Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo size={36} className="group-hover:scale-105 transition-transform" />
              <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">RaiseNest</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-white/5 border border-white/10 hover:bg-white/10 rounded-md transition-colors"
            >
              <Search size={14} />
              <span>Search...</span>
              <kbd className="hidden lg:inline-flex px-1.5 py-0.5 text-[10px] font-mono bg-white/10 rounded">⌘K</kbd>
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground"
            >
              {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <Sun size={18} />}
            </button>

            {session ? (
              <div className="relative hidden md:block">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                    {session.user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <span className="text-sm font-medium">{session.user?.name?.split(" ")[0] || "Account"}</span>
                  <ChevronDown size={14} className={`text-muted-foreground transition-transform ${showDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-card border border-white/10 rounded-xl shadow-xl overflow-hidden py-1"
                    >
                      <Link href="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                        <LayoutDashboard size={14} /> Dashboard
                      </Link>
                      <Link href={`/${session.user?.name}`} className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                        <User size={14} /> Your Profile
                      </Link>
                      <div className="h-px bg-white/10 my-1" />
                      <button onClick={handleSignOut} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                        <LogOut size={14} /> Sign out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Log in
                </Link>
                <Link href="/login">
                  <button className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-full transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    Get Started
                  </button>
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4 flex flex-col">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="h-px bg-white/10 my-2" />
                
                {session ? (
                  <>
                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Dashboard</Link>
                    <button onClick={handleSignOut} className="text-left text-lg font-medium text-red-400">Sign out</button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Log in</Link>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="text-center py-3 bg-primary text-primary-foreground font-medium rounded-full mt-2">Get Started</Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CMDK Search Modal Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-card border border-white/10 rounded-xl shadow-2xl overflow-hidden"
            >
              <Command className="w-full">
                <div className="flex items-center border-b border-white/10 px-3">
                  <Search size={18} className="text-muted-foreground" />
                  <Command.Input 
                    placeholder="Search campaigns, creators, categories..." 
                    className="flex h-12 w-full rounded-md bg-transparent py-3 px-3 text-sm outline-none placeholder:text-muted-foreground text-foreground"
                  />
                  <button onClick={() => setSearchOpen(false)} className="p-1 hover:bg-white/10 rounded-md">
                    <X size={14} className="text-muted-foreground" />
                  </button>
                </div>
                <Command.List className="max-h-[300px] overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No results found.</Command.Empty>
                  <Command.Group heading="Suggestions" className="px-2 text-xs text-muted-foreground py-2 font-medium">
                    <Command.Item className="px-2 py-2 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-2">
                      <Rocket size={14} className="text-primary" /> Start a Campaign
                    </Command.Item>
                    <Command.Item className="px-2 py-2 text-sm text-foreground hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-2">
                      <LayoutDashboard size={14} className="text-secondary" /> Browse Technology
                    </Command.Item>
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


