"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

// Sample announcements data
const announcements = [
  {
    date: "2024-10-30",
    title: "PLATFORM LAUNCH ANNOUNCEMENT",
    content: "We are excited to announce the official launch of the Orca Monsta platform.",
    category: "LAUNCH",
    important: true
  },
  {
    date: "2024-11-01",
    title: "ECOSYSTEM TOKENS LAUNCHED",
    content: "$SUPASEXI and $LOUIS XIV launched with automated algorithmically stable market makers to implement stability, increase volume, fees and rewards for users.",
    category: "LAUNCH",
    important: true
  },
  {
    date: "2024-11-01",
    title: "COMMUNITY REWARDS PROGRAM",
    content: "Introducing our new community rewards program with continous benefits for holders. Fees generated from daily trading volume will be distributed to holders proportionally.",
    category: "COMMUNITY",
    important: false
  },
  {
    date: "2024-11-02",
    title: "Community spaces launched",
    content: "Telegram channels launched for community interaction and updates, Twitter account has be launched and will be used for announcements and updates, Discord server launched for more community interaction and to host our community events.",
    category: "Launch",
    important: true
  },
  {
    date: "2024-11-03",
    title: "WEBSITE IS LIVE",
    content: "We are excited to announce our website has been launched and is live, construction is still being conducted so stay tuned for updates as we implement them! When fully completed we will be migrating our server to an HTTPS domain.",
    category: "DEVELOPMENT",
    important: true
  },
  {
    date: "2024-11-06",
    title: "GOBBLER AMM IMPLEMENTATION",
    content: "Gobbler is an AMM on Solana that uses a flat fee structure instead of % meaning that it should default on aggregators as the cheapest trade in most cases providing there's liquidity. We also have the LP tokens having metadata so modify them and the LP tokens themselves are on bonding curves accordingly. Gobbler will be embedded on our platform and will be available for use.",
    category: "DEVELOPMENT",
    important: true
  },
  {
    date: "2024-11-12",
    title: "Twitter buy and burn implementation",
    content: "Our developers have implemented a buy and burn mechanism on Twitter. linking our platform to our Twitter mechanism, users will be able to trade live on X.com by posting and commenting. When a user buys using our automated platform, a portion of the transaction will be used to buy $ORCA and burn it. This will help drive up the price of $ORCA and any other ecosystem tokens traded on X (Twitter) as there will inheirently be less supply.",
    category: "DEVELOPMENT",
    important: true
  },
  {
    date: "2024-11-13",
    title: "NFT Development",
    content: "NFTs are being developed for the community, these will be used general trading, to enchance our ecosystem and for giveaways and future community events. More information will be released soon as it becomes available.",
    category: "DEVELOPMENT",
    important: true
  }
]

// Add this function at the top of your component to format the current date
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
};

export default function Announcements() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Effect */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full 
            bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
            bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]
            animate-grid-flow"></div>
        </div>

        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-[128px] animate-pulse delay-700"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-4`}>
          ANNOUNCEMENTS
        </h1>
        
        {/* Add current date display */}
        <div className={`${cornerstone.className} text-xl text-gray-400 mb-8`}>
          TODAY'S DATE: {getCurrentDate()}
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((announcement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-md bg-black/30 rounded-xl p-6 border border-gray-800/50 
                shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
                transform transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-gray-400">{announcement.date}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  announcement.important 
                    ? 'bg-red-500/20 text-red-400' 
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {announcement.category}
                </span>
              </div>
              
              <h2 className={`${cornerstone.className} text-2xl text-cyan-400 mb-4`}>
                {announcement.title}
              </h2>
              
              <p className="text-gray-300">
                {announcement.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <p className={`${cornerstone.className} text-xl text-gray-300 mb-6`}>
            FOLLOW US FOR THE LATEST UPDATES
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://t.me/orca_monsta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                transition-all duration-300"
            >
              TELEGRAM
            </a>
            <a
              href="https://x.com/OrcaMonsta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                transition-all duration-300"
            >
              TWITTER
            </a>
            <a
              href="https://discord.gg/93CMsHcm"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                transition-all duration-300"
            >
              DISCORD
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
