"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

const CURRENT_PHASE = 1; // Index 1 represents Phase 2 (0-based indexing)

export default function Roadmap() {
  // Using the same roadmap content from aboutContent
  const roadmapContent = {
    title: "STRATEGIC ROADMAP",
    phases: [
      {
        name: "PHASE 1: FOUNDATION",
        points: [
          "LAUNCH OF $ORCA TOKEN AND CORE PLATFORM",
          "IMPLEMENTATION OF FEE DISTRIBUTION SYSTEM",
          "COMMUNITY BUILDING AND SOCIAL MEDIA PRESENCE",
          "INITIAL PARTNERSHIPS AND INTEGRATIONS",
          "REGISTER DEVELOP AND LAUNCH DOMAIN"
        ]
      },
      {
        name: "PHASE 2: EXPANSION",
        points: [
          "INTRODUCTION OF $SUPASEXI, $LOUISXIV AND $CANDOUR TOKENS",
          "DEPLOYMENT OF ALGORITHMIC STABILITY MECHANISMS",
          "INTRODUCTION OF MORE COMMUNITY CHOSEN TOKENS",
          "STRATEGIC MARKETING INITIATIVES",
          "EXPAND PARTNERSHIPS AND INTEGRATIONS",
          "DEVELOPMENT OF NFT's",
          "COMMUNITY DRIVEN IMPROVEMENTS"
        ]
      },
      {
        name: "PHASE 3: INNOVATION",
        points: [
          "LAUNCHING OF MULTIPLE ECOSYSTEM TOKENS",
          "LAUNCHING OF ORCA MONSTA NFT's",
          "ADVANCED GOVERNANCE IMPLEMENTATION",
          "CONTINOUS DEVELOPMENT",
          "FURTHER EXPAND SOCIAL MEDIA PRESENCE",
          "COMMUNITY DRIVEN INITIATIVES",
          "COMMUNITY REWARDS, INCENTIVES & GIVEAWAYS"
        ]
      },
      {
        name: "PHASE 4: MATURITY",
        points: [
          "FULL ECOSYSTEM INTEGRATION",
          "ADVANCED TRADING TOOLS AND ALGORITHMIC FEATURES",
          "INSTITUTIONAL GRADE ANALYTICS AND FEATURES",
          "GLOBAL MARKET EXPANSION & INTEGRATION",
          "PURSUE ADDITIONAL PARTNERSHIPS",
          "MARKETING & FURTHER COMMUNITY BUILDING",
          "COMMUNITY REWARDS & RECOGNITION"
        ]
      },
      {
        name: "PHASE 5: IMPROVEMENTS",
        points: [
          "COMMUNITY AND DEVELOPER DRIVEN IMPROVEMENTS",
          "ADVANCED TRADING TOOLS AND ALGORITHMIC FEATURES",
          "INSTITUTIONAL GRADE ANALYTICS AND SECURITY",
          "GLOBAL MARKET & PARTNERSHIP EXPANSION",
          "ONGOING ECOSYSTEM ENHANCEMENTS & IMPROVEMENTS"
        ]
      },
    ]
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
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
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-4 text-center`}>
          {roadmapContent.title}
        </h1>
        
        {/* Mobile Disclaimer */}
        <p className={`${cornerstone.className} text-gray-400 text-sm text-center mb-12 
          backdrop-blur-md bg-black/30 mx-auto max-w-md rounded-lg py-2 px-4 border border-gray-800/50`}>
          ROADMAP BEST VIEWED HORIZONTALLY ON MOBILE DEVICES
        </p>

        {/* Visual Roadmap Timeline */}
        <div className="relative mb-16">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1">
            <div className="h-full bg-gradient-to-b from-cyan-500/50 via-green-500/50 to-cyan-500/50 
              animate-pulse rounded-full"></div>
          </div>

          {/* Phases */}
          <div className="relative">
            {roadmapContent.phases.map((phase, index) => (
              <div key={index} 
                className={`mb-24 flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Box */}
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`backdrop-blur-md bg-black/30 rounded-xl p-6 border 
                    ${index === CURRENT_PHASE 
                      ? 'border-cyan-500/50 shadow-[0_0_50px_rgba(0,255,255,0.3)]' 
                      : 'border-gray-800/50 shadow-[0_0_50px_rgba(0,255,255,0.1)]'}
                    hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
                    transform transition-all duration-300 group hover:scale-105 animate-fadeIn`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    {/* Current Phase Label - Only shows for current phase */}
                    {index === CURRENT_PHASE && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 
                        bg-gradient-to-r from-cyan-500 to-green-500 rounded-full
                        text-xs text-white font-bold animate-pulse">
                        CURRENT PHASE
                      </div>
                    )}
                    <h3 className={`${cornerstone.className} text-xl font-bold 
                      ${index === CURRENT_PHASE ? 'text-cyan-400' : 'text-cyan-400'} mb-4`}>
                      {phase.name}
                    </h3>
                    <div className="space-y-3">
                      {phase.points.map((point, pointIndex) => (
                        <div key={pointIndex} 
                          className={`${cornerstone.className} text-gray-300 flex items-start group`}
                          style={{
                            animationDelay: `${(index * 200) + (pointIndex * 100)}ms`
                          }}
                        >
                          <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                            <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                              group-hover:from-cyan-400/70 transition-all duration-300" />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                              bg-cyan-400/40 rounded-full animate-pulse" />
                          </div>
                          <span className="text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="w-16 relative flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center group
                    animate-fadeIn ${index === CURRENT_PHASE 
                      ? 'border-2 border-cyan-500 bg-cyan-500/20' 
                      : 'border border-gray-800/50 bg-black/30'}`}
                    style={{
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className={`w-4 h-4 rounded-full ${index === CURRENT_PHASE 
                      ? 'bg-cyan-400 animate-ping' 
                      : 'bg-cyan-400/40 animate-pulse'} 
                      group-hover:bg-green-400/40 transition-all duration-300`} />
                  </div>
                  {/* Progress Line for Current Phase */}
                  {index === CURRENT_PHASE && (
                    <div className="absolute left-1/2 h-24 w-1 -translate-x-1/2">
                      <div className="h-full bg-gradient-to-b from-cyan-500 to-transparent 
                        animate-pulse rounded-full" />
                    </div>
                  )}
                </div>

                {/* Empty space for opposite side */}
                <div className="w-[calc(50%-2rem)]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
