"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'
import { motion } from 'framer-motion'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

// Standard bullet point component
const LaserBullet = () => (
  <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-400/70 transition-all duration-300" />
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />
      <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
    </div>
  </div>
);

export default function Gobbler() {
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

      {/* Disclaimer Banner - Add this right after the navigation */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30
            shadow-[0_0_30px_rgba(0,255,255,0.1)]"
        >
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <p className={`${cornerstone.className} text-cyan-400`}>
              DEVELOPMENT NOTICE: GOBBLER AMM IS CURRENTLY UNDER DEVELOPMENT. CHECK BACK SOON FOR PUBLIC RELEASE ANNOUNCEMENTS.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-8`}>
          GOBBLER AMM
        </h1>

        {/* Introduction Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300 mb-8"
        >
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            INTRODUCING GOBBLER
          </h2>
          <div className="space-y-4">
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                GOBBLER IS AN INNOVATIVE AUTOMATED MARKET MAKER (AMM) ON THE SOLANA BLOCKCHAIN THAT REVOLUTIONIZES TRADING WITH ITS UNIQUE FLAT FEE STRUCTURE, REPLACING TRADITIONAL PERCENTAGE-BASED FEES
              </span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                BY IMPLEMENTING A FLAT FEE STRUCTURE, GOBBLER CONSISTENTLY APPEARS AS THE MOST COST-EFFECTIVE OPTION ON AGGREGATORS, MAKING IT THE DEFAULT CHOICE FOR TRADERS SEEKING THE BEST RATES
              </span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                ENHANCED LP TOKEN FUNCTIONALITY INCLUDES CUSTOMIZABLE METADATA FOR VISUAL APPEAL AND INNOVATIVE BONDING CURVES THAT OPTIMIZE LIQUIDITY PROVISION
              </span>
            </div>
          </div>
        </motion.div>

        {/* How It Works Section - New */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300 mb-8"
        >
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            HOW IT WORKS
          </h2>
          <div className="space-y-4">
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                FLAT FEE MODEL: INSTEAD OF CHARGING A PERCENTAGE OF THE TRADE, GOBBLER IMPLEMENTS A FIXED FEE STRUCTURE, MAKING IT MORE ECONOMICAL FOR LARGER TRADES
              </span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                AGGREGATOR OPTIMIZATION: WHEN SUFFICIENT LIQUIDITY IS AVAILABLE, GOBBLER'S FLAT FEE STRUCTURE NATURALLY POSITIONS IT AS THE MOST COST-EFFECTIVE OPTION ON AGGREGATORS
              </span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                BONDING CURVES: LP TOKENS OPERATE ON SOPHISTICATED BONDING CURVES, CREATING A MORE EFFICIENT AND PREDICTABLE LIQUIDITY ENVIRONMENT
              </span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">
                ENHANCED METADATA: LP TOKENS FEATURE CUSTOMIZABLE METADATA, ALLOWING FOR IMPROVED VISUALIZATION AND TRACKING OF LIQUIDITY POSITIONS
              </span>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300 mb-8"
        >
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            KEY FEATURES
          </h2>
          <div className="space-y-4">
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">FLAT FEE STRUCTURE INSTEAD OF PERCENTAGE-BASED FEES</span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">DEFAULTS ON AGGREGATORS AS THE CHEAPEST TRADE OPTION</span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">LP TOKENS WITH CUSTOMIZABLE METADATA</span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">BONDING CURVES FOR LP TOKENS</span>
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300 mb-8"
        >
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            BENEFITS
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className={`${cornerstone.className} text-xl text-cyan-400 mb-4`}>FOR TRADERS</h3>
              <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <LaserBullet />
                <span className="mt-1">LOWEST POSSIBLE TRADING FEES</span>
              </div>
              <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <LaserBullet />
                <span className="mt-1">PREDICTABLE TRANSACTION COSTS</span>
              </div>
              <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <LaserBullet />
                <span className="mt-1">OPTIMIZED TRADING ROUTES</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className={`${cornerstone.className} text-xl text-cyan-400 mb-4`}>FOR LIQUIDITY PROVIDERS</h3>
              <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <LaserBullet />
                <span className="mt-1">ENHANCED LP TOKEN FUNCTIONALITY</span>
              </div>
              <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <LaserBullet />
                <span className="mt-1">CUSTOMIZABLE BONDING CURVES</span>
              </div>
              <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <LaserBullet />
                <span className="mt-1">IMPROVED YIELD OPPORTUNITIES</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300"
        >
          <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-6`}>
            PLATFORM INTEGRATION
          </h2>
          <div className="space-y-4">
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">SEAMLESSLY INTEGRATED INTO THE ORCA MONSTA ECOSYSTEM</span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">ACCESSIBLE THROUGH OUR PLATFORM INTERFACE</span>
            </div>
            <div className={`${cornerstone.className} text-gray-300 flex items-start group`}>
              <LaserBullet />
              <span className="mt-1">OPTIMIZED FOR MAXIMUM EFFICIENCY AND USER EXPERIENCE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
