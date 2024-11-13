"use client"

import React from 'react'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

const Candour = () => {
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

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Development Disclaimer - Add this before the Welcome banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-red-500/10 rounded-xl p-6 border border-red-500/30
            shadow-[0_0_30px_rgba(255,0,0,0.1)] mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            </div>
            <div className={`${cornerstone.className} text-red-400`}>
              <p className="mb-2">
                DEVELOPMENT NOTICE: CANDOUR FAIR LAUNCH WEBSITE IS CURRENTLY UNDER DEVELOPMENT
              </p>
              <p className="text-sm text-red-400/80">
                PLEASE CHECK OUR <a href="/announcements" className="underline hover:text-red-300 transition-colors">ANNOUNCEMENTS PAGE</a> AND 
                SOCIAL MEDIA PLATFORMS FOR UPDATES ON THE LAUNCH
              </p>
            </div>
          </div>
        </motion.div>

        {/* Welcome banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30
            shadow-[0_0_30px_rgba(0,255,255,0.1)] mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <p className={`${cornerstone.className} text-cyan-400`}>
              WELCOME TO CANDOUR FAIR LAUNCH - THE FUTURE OF FAIR TOKEN LAUNCHES ON SOLANA
            </p>
          </div>
        </motion.div>

        {/* Candour Fair Launch Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-black/30 rounded-xl border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300"
        >
          <div className={`${cornerstone.className} text-xl text-green-400 p-6 border-b border-gray-800/50`}>
            CANDOUR FAIR LAUNCH
          </div>
          <div className="w-full h-[800px] rounded-b-xl overflow-hidden">
            <iframe 
              src="https://www.candorlaunch.fun/"
              className="w-full h-full border-0"
              style={{
                borderRadius: '0 0 0.75rem 0.75rem'
              }}
            />
          </div>
        </motion.div>
      </div>
    </main>
  )
}

// Add proper export statement
export default Candour
