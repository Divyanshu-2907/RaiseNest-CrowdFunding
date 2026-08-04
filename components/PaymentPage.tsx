"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import { fetchuser, fetchpayments, initiate } from "@/actions/useractions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, Share2, Bookmark, ShieldCheck, 
  TrendingUp, Users, Calendar, AlertCircle, 
  ChevronRight, ArrowRight, Zap, Target
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MOCK_CAMPAIGNS } from "@/lib/mockData";

export default function PaymentPage({ username }: { username: string }) {
  const [paymentform, setPaymentform] = useState({ name: "", message: "", amount: "" });
  const [currentUser, setcurrentUser] = useState<any>({});
  const [payments, setPayments] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("story");
  
  // Find mock campaign data based on username or fallback to default
  const campaignData = MOCK_CAMPAIGNS.find(c => c.creator.username === username) || MOCK_CAMPAIGNS[0];
  const raisedTotal = payments.reduce((acc, curr) => acc + (curr.amount || 0), 0) + campaignData.raised;

  useEffect(() => {
    const fetchData = async () => {
      let u = await fetchuser(username);
      setcurrentUser(u);
      let dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
    };
    fetchData();
  }, [username]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount: number) => {
    let a = await initiate(amount, username, paymentform);
    let orderId = a.id;

    var options: any = {
      key: process.env.NEXT_PUBLIC_KEY_ID,
      amount: amount,
      currency: "INR",
      name: "RaiseNest",
      description: `Support ${username}`,
      image: "/logo.png",
      order_id: orderId,
      callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      prefill: {
        name: paymentform.name || "Anonymous Supporter",
        email: "backer@example.com",
        contact: "9999999999",
      },
      theme: { color: "#2563EB" },
    };

    var rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <ToastContainer position="bottom-right" theme="dark" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 w-full h-[600px] z-[-1] overflow-hidden opacity-30 pointer-events-none">
        <Image src={campaignData.image} alt="Background" fill className="object-cover blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Media Player / Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full md:w-2/3 relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl group"
          >
            <Image src={campaignData.image} alt={campaignData.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Button variant="outline" size="icon" className="w-16 h-16 rounded-full border-white/30 bg-black/50 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </Button>
            </div>
          </motion.div>

          {/* Core Stats & Creator Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full md:w-1/3 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-2 mb-4">
                {campaignData.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2 text-foreground">{campaignData.title}</h1>
              <p className="text-muted-foreground mb-6 line-clamp-3">{campaignData.description}</p>
              
              <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl mb-6">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={`https://github.com/${username}.png`} />
                  <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Created by {currentUser?.name || username}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <ShieldCheck size={12} className="text-success" /> Verified Student Innovator
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-none">
              <CardContent className="p-6">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-3xl font-bold text-foreground">₹{raisedTotal.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground mb-1">raised of ₹{campaignData.goal.toLocaleString()} goal</span>
                </div>
                <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((raisedTotal / campaignData.goal) * 100, 100)}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
                <div className="flex justify-between text-sm font-medium mb-6">
                  <div className="flex items-center gap-1"><Users size={14} className="text-muted-foreground"/> {payments.length + campaignData.backers} Backers</div>
                  <div className="flex items-center gap-1"><Calendar size={14} className="text-muted-foreground"/> {campaignData.daysLeft} Days Left</div>
                </div>

                <div className="flex gap-3">
                  <Button variant="premium" className="w-full flex-1" onClick={() => document.getElementById('checkout-section')?.scrollIntoView({behavior: 'smooth'})}>
                    Back this Project
                  </Button>
                  <Button variant="outline" size="icon"><Heart size={18} /></Button>
                  <Button variant="outline" size="icon"><Share2 size={18} /></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Content Tabs & Main Body */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <div className="flex gap-6 border-b border-white/10 mb-8 sticky top-16 bg-background/80 backdrop-blur-md z-10 pt-4">
              {['story', 'updates', 'comments'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-medium transition-colors relative capitalize ${activeTab === tab ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="prose prose-invert prose-blue max-w-none"
              >
                {activeTab === 'story' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4">About the Project</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {campaignData.description} We believe that students should have access to the absolute best tools without being restricted by massive enterprise licensing fees.
                    </p>
                    <Image src={campaignData.image} alt="Showcase" width={800} height={400} className="rounded-xl border border-white/10 my-8" />
                    <h3 className="text-2xl font-bold mb-4">Why we need your help</h3>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      The funds raised will go directly towards purchasing specialized hardware required for final rendering, paying our small team of student developers, and covering server costs for the first year of operation.
                    </p>
                  </div>
                )}
                
                {activeTab === 'updates' && (
                  <div className="space-y-8">
                    <Card>
                      <CardHeader>
                         <div className="flex justify-between items-center mb-2">
                           <Badge variant="success">Milestone Reached</Badge>
                           <span className="text-xs text-muted-foreground">2 days ago</span>
                         </div>
                         <CardTitle>We hit 50% funding!</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">Thank you to everyone who has supported us so far. We are working hard on the alpha release and will share screenshots soon.</p>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === 'comments' && (
                  <div className="flex flex-col items-center justify-center py-12 text-center border border-white/10 rounded-xl bg-white/5 border-dashed">
                     <AlertCircle size={32} className="text-muted-foreground mb-4" />
                     <h3 className="text-lg font-semibold mb-1">Supporters Only</h3>
                     <p className="text-muted-foreground">You must back this project to leave a comment.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Checkout & Tiers Sidebar */}
          <div className="w-full md:w-1/3" id="checkout-section">
            <h3 className="text-xl font-bold mb-6">Select a Reward</h3>
            
            <div className="space-y-6">
              {/* Custom Pledge */}
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg">Make a Custom Pledge</CardTitle>
                  <CardDescription>Support without a specific reward</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input name="name" value={paymentform.name} onChange={handleChange} placeholder="Your Name (Optional)" />
                  <Input name="message" value={paymentform.message} onChange={handleChange} placeholder="Leave a supportive message" />
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
                    <Input name="amount" type="number" value={paymentform.amount} onChange={handleChange} placeholder="Amount" className="pl-8" />
                  </div>
                  <Button variant="default" className="w-full" onClick={() => pay(Number(paymentform.amount) * 100)}>
                    Pledge Custom Amount
                  </Button>
                </CardContent>
              </Card>

              {/* Tiers */}
              {[
                { amount: 500, title: "Early Bird Supporter", desc: "Get early access to the alpha version and a special Discord role." },
                { amount: 2000, title: "Pro Access", desc: "1 Year of Pro Access + Exclusive Merchandise + Beta Access." },
                { amount: 5000, title: "Founding Member", desc: "Lifetime Pro Access + Name in Credits + Direct calls with the team." }
              ].map((tier, i) => (
                <Card key={i} className="group hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden" onClick={() => {
                  setPaymentform({...paymentform, amount: tier.amount.toString()});
                  document.getElementById('checkout-section')?.scrollIntoView({behavior: 'smooth'});
                }}>
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="text-primary" size={20} />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">Pledge ₹{tier.amount}</CardTitle>
                    <h4 className="font-semibold text-primary">{tier.title}</h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{tier.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Live Supporter Feed */}
            <div className="mt-12">
               <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Zap size={18} className="text-accent"/> Recent Supporters</h3>
               <div className="space-y-4">
                 {payments.length > 0 ? payments.slice(0,5).map((p, i) => (
                   <motion.div initial={{opacity: 0, x: -10}} animate={{opacity: 1, x: 0}} transition={{delay: i * 0.1}} key={i} className="flex gap-3 items-center p-3 rounded-lg bg-white/5 border border-white/5">
                     <Avatar className="h-10 w-10">
                       <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${p.name}`} />
                       <AvatarFallback>SP</AvatarFallback>
                     </Avatar>
                     <div className="flex-1 overflow-hidden">
                       <p className="text-sm font-medium truncate">{p.name || "Anonymous"} <span className="text-muted-foreground font-normal">pledged</span> <span className="text-success font-bold">₹{p.amount}</span></p>
                       {p.message && <p className="text-xs text-muted-foreground italic truncate">"{p.message}"</p>}
                     </div>
                   </motion.div>
                 )) : (
                   <p className="text-sm text-muted-foreground">Be the first to support this campaign!</p>
                 )}
               </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
