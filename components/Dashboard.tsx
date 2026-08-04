"use client"

import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'
import { 
  BarChart, Wallet, Users, TrendingUp, Settings, 
  Activity, CheckCircle2, ChevronRight, Zap 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'

const Dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [form, setform] = useState<any>({})
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    if (!session) {
      router.push('/login')
    } else {
      getData()
    }
  }, [session, router])

  const getData = async () => {
    if(session?.user?.name) {
      let u = await fetchuser(session.user.name)
      setform(u)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await updateProfile(form, session?.user?.name)
    toast.success('Profile Updated Successfully!', { theme: "dark" });
  }

  const statCards = [
    { title: "Total Raised", value: "₹45,078", change: "+12.5%", icon: Wallet, trend: "up" },
    { title: "Active Backers", value: "342", change: "+4.1%", icon: Users, trend: "up" },
    { title: "Page Views", value: "12.5K", change: "+24%", icon: Activity, trend: "up" },
    { title: "Conversion", value: "3.2%", change: "-1.1%", icon: TrendingUp, trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <ToastContainer />
      
      {/* Dashboard Header */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-md pt-24 pb-8 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Creator Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back, {session?.user?.name}. Here's what's happening with your projects.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => router.push(`/${session?.user?.name}`)}>View Public Page</Button>
            <Button variant="premium">Create Campaign</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-8 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-2">
          {[
            { id: "overview", label: "Overview", icon: BarChart },
            { id: "campaigns", label: "My Campaigns", icon: Zap },
            { id: "audience", label: "Audience", icon: Users },
            { id: "settings", label: "Settings & Payment", icon: Settings },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
                activeTab === tab.id ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
              {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {activeTab === "overview" && (
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
              {/* Stat Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {statCards.map((stat, i) => (
                  <Card key={i} className="bg-white/5 border-white/5 hover:border-white/10 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                          <stat.icon size={20} />
                        </div>
                        <Badge variant={stat.trend === 'up' ? 'success' : 'destructive'} className="text-[10px] px-1.5 py-0">
                          {stat.change}
                        </Badge>
                      </div>
                      <h4 className="text-muted-foreground text-sm font-medium">{stat.title}</h4>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts & Activity Mock */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle>Revenue Overview</CardTitle>
                    <CardDescription>Mocked visual representation of monthly funding.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-64 flex items-end gap-2 pt-8">
                    {/* CSS Mock Chart */}
                    {[40, 25, 60, 30, 80, 45, 90, 65, 100, 75, 55, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-all relative group" style={{ height: `${h}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                          ₹{h * 100}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Health Check</CardTitle>
                    <CardDescription>Suggestions to improve funding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex gap-3">
                      <Zap size={18} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Post an Update</p>
                        <p className="text-xs text-muted-foreground">Campaigns with weekly updates raise 3x more.</p>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/5 flex gap-3">
                      <CheckCircle2 size={18} className="text-success shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold">Reward Tiers Optimized</p>
                        <p className="text-xs text-muted-foreground">Your ₹2000 tier is converting perfectly.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
              <Card>
                <CardHeader>
                  <CardTitle>Profile & Payment Settings</CardTitle>
                  <CardDescription>Update your public profile details and Razorpay API keys to receive funds.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Name</label>
                        <Input name="name" value={form.name || ""} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Username</label>
                        <Input name="username" value={form.username || ""} onChange={handleChange} disabled className="opacity-50" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-muted-foreground">Email</label>
                        <Input name="email" value={form.email || ""} onChange={handleChange} type="email" disabled className="opacity-50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Profile Picture URL</label>
                        <Input name="profilepic" value={form.profilepic || ""} onChange={handleChange} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">Cover Picture URL</label>
                        <Input name="coverpic" value={form.coverpic || ""} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-6">
                      <h4 className="text-lg font-semibold mb-4 text-primary flex items-center gap-2"><Wallet size={18}/> Payment Configuration</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Razorpay ID</label>
                          <Input name="razorpayid" value={form.razorpayid || ""} onChange={handleChange} type="password" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-muted-foreground">Razorpay Secret</label>
                          <Input name="razorpaysecret" value={form.razorpaysecret || ""} onChange={handleChange} type="password" />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" variant="premium" className="w-full">Save Changes</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {(activeTab === "campaigns" || activeTab === "audience") && (
            <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="flex flex-col items-center justify-center py-24 text-center">
              <Zap size={48} className="text-muted-foreground/30 mb-4" />
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-muted-foreground max-w-sm">This feature is currently in development as part of the Phase 4 rollout.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
