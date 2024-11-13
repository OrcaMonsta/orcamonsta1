"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'
import Image from 'next/image'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

const ecosystemTokens = [
  {
    name: "$ORCA",
    description: "THE FLAGSHIP GOVERNANCE TOKEN OF OUR ECOSYSTEM",
    features: [
      "TOTAL SUPPLY: 999,000,000 TOKENS",
      "DYNAMIC FEE DISTRIBUTION TO HOLDERS",
      "GOVERNANCE RIGHTS FOR PROTOCOL DECISIONS",
      "STAKING REWARDS AND LIQUIDITY INCENTIVES",
      "DEFLATIONARY MECHANICS THROUGH SYSTEMATIC BURNS"
    ]
  },
  {
    name: "$MYST",
    description: "THE STABILITY MECHANISM TOKEN",
    features: [
      "ALGORITHMIC PRICE STABILIZATION",
      "AUTOMATIC MARKET OPERATIONS",
      "VOLATILITY DAMPENING SYSTEM",
      "INTELLECTUAL PROPERTY PROTECTION",
      "DYNAMIC SUPPLY ADJUSTMENTS"
    ]
  },
  {
    name: "$CANDOUR",
    description: "THE YIELD OPTIMIZATION TOKEN",
    features: [
      "AUTOMATED YIELD STRATEGIES",
      "RISK-ADJUSTED RETURNS",
      "COMPOUND INTEREST MECHANICS",
      "LIQUIDITY MINING REWARDS",
      "YIELD FARMING AGGREGATION"
    ]
  },
  {
    name: "$LOUISXIV",
    description: "THE LUXURY GOVERNANCE TOKEN",
    features: [
      "EXCLUSIVE ACCESS TO PREMIUM FEATURES",
      "ENHANCED VOTING POWER",
      "PRIORITY FEE DISTRIBUTION",
      "VIP PLATFORM BENEFITS",
      "SPECIAL EVENT ACCESS"
    ]
  },
  {
    name: "$SUPASEXI",
    description: "THE COMMUNITY REWARDS TOKEN",
    features: [
      "SOCIAL ENGAGEMENT REWARDS",
      "COMMUNITY EVENT PARTICIPATION",
      "LOYALTY PROGRAM BENEFITS",
      "GAMIFICATION REWARDS",
      "SOCIAL TRADING INCENTIVES"
    ]
  }
]

// Laser bullet point component
const LaserBullet = () => (
  <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-400/70 transition-all duration-300" />
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />
      <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
    </div>
  </div>
);

export default function Ecosystem() {
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
          ECOSYSTEM TOKENS
        </h1>

        {/* Development Disclaimer */}
        <div className="backdrop-blur-md bg-cyan-500/10 rounded-xl p-8 border border-cyan-500/30
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 mb-12">
          
          {/* Animated Pulse Indicator */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <h2 className={`${cornerstone.className} text-2xl text-cyan-400`}>
              ECOSYSTEM EXPANSION IN PROGRESS
            </h2>
          </div>

          <div className={`${cornerstone.className} text-gray-300 space-y-4`}>
            <p>
              ADDITIONAL ECOSYSTEM TOKENS ARE CURRENTLY UNDER DEVELOPMENT AND WILL BE LAUNCHED & IMPLEMENTED
              AS THEY BECOME AVAILABLE AND AS DETERMINED BY OUR DEVELOPMENT TEAM.
            </p>
            <p>
              NEW TOKENS TO BE INCLUDED IN THE ORCA MONSTA WHIRLPOOL ECOSYSTEM WILL BE 
              ANNOUNCED ON OUR{' '}
              <Link href="/announcements" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ANNOUNCEMENTS PAGE
              </Link>{' '}
              AND SOCIAL MEDIA PLATFORMS.
            </p>
          </div>
        </div>

        {/* Token Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {ecosystemTokens.map((token, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
              transform transition-all duration-300">
              
              <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-4`}>
                {token.name}
              </h2>
              
              <p className={`${cornerstone.className} text-cyan-400 mb-6`}>
                {token.description}
              </p>
              
              <div className="space-y-3">
                {token.features.map((feature, i) => (
                  <div key={i} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                    <LaserBullet />
                    <span className="mt-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem Flowchart */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300">
          
          <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-6`}>
           ORCA MONSTA WHIRLPOOL ECOSYSTEM STRUCTURE which ECOSYTEM TOKENS WILL BE IMPLEMENTED INTO
          </h2>
          
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
            <Image
              src="/Ecosystemflowchart.png"
              alt="Orca Monsta Whirlpool Ecosystem Flowchart"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
