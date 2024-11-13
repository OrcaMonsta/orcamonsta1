"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Community() {
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
          COMMUNITY HUB
        </h1>

        {/* Social Links Section */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {/* Telegram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-md bg-black/30 rounded-xl p-6 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
              transform transition-all duration-300"
          >
            <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-4`}>TELEGRAM</h2>
            <p className="text-gray-300 mb-4">Join our active Telegram community for real-time updates and discussions.</p>
            <a 
              href="https://t.me/orca_monsta" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                transition-all duration-300"
            >
              JOIN TELEGRAM
            </a>
          </motion.div>

          {/* Twitter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="backdrop-blur-md bg-black/30 rounded-xl p-6 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
              transform transition-all duration-300"
          >
            <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-4`}>TWITTER</h2>
            <p className="text-gray-300 mb-4">Follow us on Twitter for the latest news and announcements.</p>
            <a 
              href="https://x.com/OrcaMonsta" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                transition-all duration-300"
            >
              FOLLOW TWITTER
            </a>
          </motion.div>

          {/* Discord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="backdrop-blur-md bg-black/30 rounded-xl p-6 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
              transform transition-all duration-300"
          >
            <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-4`}>DISCORD</h2>
            <p className="text-gray-300 mb-4">Join our Discord server for community events and support.</p>
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]
                transition-all duration-300"
            >
              JOIN DISCORD
            </a>
          </motion.div>
        </div>

        {/* Community Guidelines */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] mb-12">
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            COMMUNITY GUIDELINES
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full"></div>
              <p className="text-gray-300">Be respectful and supportive of other community members</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full"></div>
              <p className="text-gray-300">No spam, harassment, or inappropriate content</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full"></div>
              <p className="text-gray-300">Do not share financial advice or make price predictions</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 bg-cyan-400 rounded-full"></div>
              <p className="text-gray-300">Report any suspicious activity to moderators</p>
            </div>
          </div>
        </div>

        {/* Community Benefits */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)]">
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            COMMUNITY BENEFITS
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className={`${cornerstone.className} text-xl text-cyan-400`}>REWARDS & INCENTIVES</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Exclusive airdrops for active members</li>
                <li>• Community rewards programs</li>
                <li>• Early access to new features</li>
                <li>• Special event participation</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className={`${cornerstone.className} text-xl text-cyan-400`}>ENGAGEMENT & SUPPORT</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 24/7 community support</li>
                <li>• Regular AMAs with team</li>
                <li>• Educational content</li>
                <li>• Community voting rights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
