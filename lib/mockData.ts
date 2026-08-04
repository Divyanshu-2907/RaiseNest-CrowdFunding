export const MOCK_CAMPAIGNS = [
  {
    id: "camp_1",
    title: "Quantum Computing Framework for Students",
    creator: { name: "Sarah Chen", username: "sarahc_quantum", avatar: "https://i.pravatar.cc/150?u=sarahc_quantum" },
    category: "Technology",
    raised: 12500,
    goal: 15000,
    daysLeft: 12,
    backers: 342,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
    description: "An open-source quantum computing simulator designed specifically for university students to run complex algorithms on standard hardware.",
    tags: ["Tech", "Open Source", "Education"]
  },
  {
    id: "camp_2",
    title: "Eco-Friendly Biodegradable Filament",
    creator: { name: "Marcus Johnson", username: "marcus_3d", avatar: "https://i.pravatar.cc/150?u=marcus_3d" },
    category: "Environment",
    raised: 8900,
    goal: 5000,
    daysLeft: 5,
    backers: 890,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    description: "A revolutionary new 3D printing filament made entirely from algae and organic waste, breaking down harmlessly in 6 months.",
    tags: ["Sustainability", "Hardware", "Design"]
  },
  {
    id: "camp_3",
    title: "AI-Powered Smart Cane for the Visually Impaired",
    creator: { name: "Elena Rodriguez", username: "elena_builds", avatar: "https://i.pravatar.cc/150?u=elena_builds" },
    category: "HealthTech",
    raised: 45000,
    goal: 50000,
    daysLeft: 22,
    backers: 1205,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    description: "Upgrading the traditional white cane with LIDAR and haptic feedback to help visually impaired students navigate campuses safely.",
    tags: ["Accessibility", "AI", "Hardware"]
  },
  {
    id: "camp_4",
    title: "Next-Gen Indie Game: Neon Drift",
    creator: { name: "Alex Kumar", username: "alexk_games", avatar: "https://i.pravatar.cc/150?u=alexk_games" },
    category: "Games",
    raised: 3200,
    goal: 10000,
    daysLeft: 45,
    backers: 120,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    description: "A cyberpunk racing game with procedural track generation built by a team of college indie devs.",
    tags: ["Gaming", "Software", "Entertainment"]
  },
];

export const MOCK_STATS = {
  totalRaised: "$12.4M",
  totalBackers: "450K+",
  successfulProjects: "1,204",
  liveCampaigns: "340"
};

export const MOCK_ACTIVITY = [
  { id: 1, type: "donation", user: "Anonymous", amount: "$50", project: "Eco-Friendly Biodegradable Filament", time: "2 mins ago" },
  { id: 2, type: "comment", user: "DavidW", text: "Can't wait to try this out in my physics lab!", project: "Quantum Computing Framework", time: "15 mins ago" },
  { id: 3, type: "milestone", user: "Elena Rodriguez", title: "Reached 90% of our goal!", project: "AI-Powered Smart Cane", time: "1 hr ago" },
  { id: 4, type: "donation", user: "TechVentures", amount: "$500", project: "AI-Powered Smart Cane", time: "2 hrs ago" },
];
