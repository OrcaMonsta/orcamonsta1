"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Roadmap() {
  const phases = [
    {
      phase: "PHASE 1",
      title: "LAUNCH & FOUNDATION",
      items: [
        "WEBSITE LAUNCH",
        "COMMUNITY BUILDING",
        "DEX LISTING",
        "INITIAL MARKETING CAMPAIGN",
        "COMMUNITY PARTNERSHIPS"
      ],
      status: "COMPLETED",
      color: "cyan"
    },
    {
      phase: "PHASE 2",
      title: "EXPANSION & GROWTH",
      items: [
        "ADVANCED TRADING FEATURES",
        "ECOSYSTEM EXPANSION",
        "STRATEGIC PARTNERSHIPS",
        "ENHANCED SECURITY MEASURES",
        "COMMUNITY GOVERNANCE IMPLEMENTATION"
      ],
      status: "IN PROGRESS",
      color: "green"
    },
    {
      phase: "PHASE 3",
      title: "INNOVATION & SCALING",
      items: [
        "CROSS-CHAIN INTEGRATION",
        "ADVANCED DEFI PRODUCTS",
        "INSTITUTIONAL PARTNERSHIPS",
        "GLOBAL MARKETING EXPANSION",
        "ECOSYSTEM OPTIMIZATION"
      ],
      status: "UPCOMING",
      color: "cyan"
    },
    {
      phase: "PHASE 4",
      title: "ECOSYSTEM MATURITY",
      items: [
        "ADVANCED GOVERNANCE SYSTEM",
        "EXPANDED UTILITY FEATURES",
        "MAJOR EXCHANGE LISTINGS",
        "ENHANCED REWARD MECHANISMS",
        "GLOBAL ADOPTION INITIATIVES"
      ],
      status: "UPCOMING",
      color: "green"
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
          ROADMAP
        </h1>

        {/* Timeline Grid */}
        <div className="grid gap-8">
          {phases.map((phase, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
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
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className={`${cornerstone.className} text-3xl font-bold text-${phase.color}-400`}>
                      {phase.phase}
                    </h2>
                    <h3 className={`${cornerstone.className} text-xl text-gray-400 mt-1`}>
                      {phase.title}
                    </h3>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm 
                    ${phase.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' : 
                      phase.status === 'IN PROGRESS' ? 'bg-cyan-500/20 text-cyan-400' : 
                      'bg-gray-500/20 text-gray-400'}`}>
                    {phase.status}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {phase.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <svg className={`w-5 h-5 text-${phase.color}-400 flex-shrink-0`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={`${cornerstone.className} text-gray-300`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
