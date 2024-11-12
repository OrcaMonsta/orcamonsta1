"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'
import { motion, AnimatePresence } from 'framer-motion'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function HowItWorks() {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      title: "CONNECT WALLET",
      description: "CONNECT YOUR PREFERRED WALLET TO GET STARTED WITH ORCA MONSTA.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "ACQUIRE $ORCA",
      description: "PURCHASE $ORCA TOKENS THROUGH OUR SUPPORTED DEX PLATFORMS.",
      icon: (
        <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "HOLD & EARN",
      description: "AUTOMATICALLY EARN REWARDS FROM TRANSACTION FEES AND LIQUIDITY POOL OPERATIONS.",
      icon: (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ]

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
          HOW IT WORKS:
        </h1>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-6 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
              transform transition-all duration-300 group overflow-hidden">
              {/* Animated corner effects */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute w-full h-full animate-pulse">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  {step.icon}
                  <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400`}>
                    {step.title}
                  </h2>
                </div>
                <p className={`${cornerstone.className} text-gray-300 leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Visualization */}
        <div className="mb-16">
          <h2 className={`${cornerstone.className} text-3xl font-bold text-center text-cyan-400 mb-12`}>
            ORCA WHIRLPOOL ECOSYSTEM
          </h2>
          
          <div className="relative bg-black min-h-[800px] max-w-[1400px] mx-auto p-16">
            {/* Top Row */}
            <div className="flex justify-between items-start mb-32">
              {/* Users Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[280px] p-6 bg-[#1a1528] rounded-xl border border-purple-400/20"
              >
                <h3 className={`${cornerstone.className} text-xl text-center text-purple-400 mb-4`}>
                  USERS
                </h3>
                <div className="text-center text-gray-300">
                  "APING INTO" SPECIFIC POOLS
                </div>
              </motion.div>

              {/* Trading Tool Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[450px] p-6 bg-[#0d1528] rounded-xl border border-blue-400/20"
              >
                <h3 className={`${cornerstone.className} text-xl text-center text-blue-400 mb-4`}>
                  AUTOMATED TRADING TOOL
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• AUTOMATED POSITION MANAGEMENT</li>
                  <li>• BACKEND UNIQUE KEY GENERATION</li>
                  <li>• SIMILAR TO BULBS/PHOTON PLATFORMS</li>
                  <li>• HIGH YIELD POTENTIAL</li>
                  <li>• ASSET OPTIMIZATION SYSTEM</li>
                </ul>
              </motion.div>

              {/* Prediction Markets Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[280px] p-6 bg-[#0d1a0d] rounded-xl border border-green-400/20"
              >
                <h3 className={`${cornerstone.className} text-xl text-center text-green-400 mb-4`}>
                  PREDICTION MARKETS
                </h3>
                <div className="text-center text-gray-300">
                  WIN ROUNDS THROUGH SWAPS
                </div>
              </motion.div>
            </div>

            {/* Middle - Protocol Fee Distribution */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-[500px] mx-auto mb-32 p-6 bg-[#1a0d1a] rounded-xl border border-pink-400/20"
            >
              <h3 className={`${cornerstone.className} text-xl text-center text-pink-400 mb-4`}>
                PROTOCOL FEE DISTRIBUTION
              </h3>
              <div className="grid grid-cols-2 gap-8 mb-4">
                <div className="text-center p-4 bg-black/40 rounded-lg">
                  <div className="text-2xl font-bold text-pink-400">10%</div>
                  <div className="text-sm text-gray-300">$ORCA TOKEN HOLDERS</div>
                </div>
                <div className="text-center p-4 bg-black/40 rounded-lg">
                  <div className="text-2xl font-bold text-pink-400">90%</div>
                  <div className="text-sm text-gray-300">PREDICTION MARKET POOLS</div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-300">
                DISTRIBUTION BASED ON TOTAL VALUE LOCKED (TVL)
              </div>
            </motion.div>

            {/* Bottom Row */}
            <div className="flex justify-between items-start">
              {/* Benefits Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[280px] p-6 bg-[#0d1f1f] rounded-xl border border-cyan-400/20"
              >
                <h3 className={`${cornerstone.className} text-xl text-center text-cyan-400 mb-4`}>
                  BENEFITS
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• ENHANCED $ORCA TOKEN UTILITY</li>
                  <li>• REWARDS FOR TOKEN HOLDERS</li>
                  <li>• GROWING ECOSYSTEM</li>
                  <li>• DYNAMIC REWARD CYCLE</li>
                </ul>
              </motion.div>

              {/* Burn Mechanism Box */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-[280px] p-6 bg-[#110d1a] rounded-xl border border-red-400/20"
              >
                <h3 className={`${cornerstone.className} text-xl text-center text-red-400 mb-4`}>
                  BURN MECHANISM
                </h3>
                <div className="text-center text-gray-300">
                  INHERENT BURN FUNCTIONS REDUCE TOTAL SUPPLY OF TOKEN
                </div>
              </motion.div>
            </div>

            {/* Arrows */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="rgba(147, 197, 253, 0.4)" />
                </marker>
              </defs>
              <g>
                {/* Horizontal Arrows */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M300 100 H450" 
                  stroke="rgba(147, 197, 253, 0.4)" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead)" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M750 100 H900" 
                  stroke="rgba(147, 197, 253, 0.4)" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead)" 
                />

                {/* Vertical Arrows */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M600 200 V300" 
                  stroke="rgba(147, 197, 253, 0.4)" 
                  strokeWidth="2" 
                  markerEnd="url(#arrowhead)" 
                />

                {/* Curved Return Arrow */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  d="M200 400 Q150 250 200 100" 
                  stroke="rgba(34, 197, 94, 0.4)" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                  markerEnd="url(#arrowhead)" 
                />
              </g>
            </svg>

            {/* Bottom Text */}
            <div className="text-center text-green-400 text-sm mt-16">
              CONTINUOUS ECOSYSTEM GROWTH CYCLE
            </div>
          </div>
        </div>

        {/* Expand Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
              border border-cyan-500/50 rounded-lg
              hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
              active:shadow-[0_0_50px_rgba(0,255,255,0.4)]
              transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full mx-auto"
            >
              <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
                shadow-[0_0_50px_rgba(0,255,255,0.1)]">
                {/* YouTube Video */}
                <div className="mb-8">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.youtube.com/embed/LJ3jUXtnFGA?si=Csez2HSKaaUszk-j" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-8">
                  <h3 className={`${cornerstone.className} text-2xl font-bold text-cyan-400 mb-4`}>
                    UNDERSTANDING THE ORCA WHIRLPOOL PROJECT & FEE DISTRIBUTION
                  </h3>

                  {/* Protocol Fees */}
                  <div>
                    <h4 className={`${cornerstone.className} text-xl text-green-400 mb-2`}>
                      PROTOCOL FEES
                    </h4>
                    <p className="text-gray-300">
                      10% of all protocol fees go directly to $ORCA token holders, adding significant value to the token. The remaining 90% is distributed to prediction market pools based on TVL.
                    </p>
                  </div>

                  {/* App Functionality */}
                  <div>
                    <h4 className={`${cornerstone.className} text-xl text-green-400 mb-2`}>
                      APP FUNCTIONALITY
                    </h4>
                    <p className="text-gray-300">
                      Our contract-based automated trading tool optimizes your Orca positions using advanced backend systems and unique key generation for efficient algorithmically stable asset management.
                    </p>
                  </div>

                  {/* Yield Potential */}
                  <div>
                    <h4 className={`${cornerstone.className} text-xl text-green-400 mb-2`}>
                      YIELD POTENTIAL
                    </h4>
                    <p className="text-gray-300">
                      Through efficient position management and fee capture, the system aims to generate substantial annual returns for participants.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  )
}
