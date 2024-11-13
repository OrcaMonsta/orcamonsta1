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
    date: "2024-03-20",
    title: "PLATFORM LAUNCH ANNOUNCEMENT",
    content: "We are excited to announce the official launch of the Orca Monsta platform...",
    category: "LAUNCH",
    important: true
  },
  {
    date: "2024-03-18",
    title: "COMMUNITY REWARDS PROGRAM",
    content: "Introducing our new community rewards program with exciting benefits...",
    category: "COMMUNITY",
    important: false
  },
  // Add more announcements as needed
]

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
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-8`}>
          ANNOUNCEMENTS
        </h1>

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
          </div>
        </div>
      </div>
    </main>
  )
}
