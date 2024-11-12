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
