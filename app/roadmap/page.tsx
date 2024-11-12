"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

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
          "INITIAL PARTNERSHIPS AND INTEGRATIONS"
        ]
      },
      {
        name: "PHASE 2: EXPANSION",
        points: [
          "INTRODUCTION OF $SUPASEXI, $LOUISXIV AND $CANDOUR TOKENS",
          "DEPLOYMENT OF ALGORITHMIC STABILITY MECHANISMS",
          "ENHANCED TRADING FEATURES AND ANALYTICS",
          "INTRODUCTION OF MORE COMMUNITY CHOSEN TOKENS",
          "STRATEGIC MARKETING INITIATIVES"
        ]
      },
      {
        name: "PHASE 3: INNOVATION",
        points: [
          "LAUNCHING OF MULTIPLE TOKENS",
          "ADVANCED GOVERNANCE IMPLEMENTATION",
          "CONTINOUS DEVELOPMENT",
          "EXPANDED PARTNERSHIP ECOSYSTEM"
        ]
      },
      {
        name: "PHASE 4: MATURITY",
        points: [
          "FULL ECOSYSTEM INTEGRATION",
          "ADVANCED TRADING TOOLS AND ALGORITHMIC FEATURES",
          "INSTITUTIONAL GRADE SECURITY MEASURES",
          "GLOBAL MARKET EXPANSION"
        ]
      }
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
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-8`}>
          {roadmapContent.title}
        </h1>

        {/* Roadmap Section */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 group overflow-hidden">
          <div className="space-y-8">
            {roadmapContent.phases.map((phase, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`${cornerstone.className} text-xl font-bold text-cyan-400`}>
                  {phase.name}
                </h3>
                <div className="space-y-3">
                  {phase.points.map((point, pointIndex) => (
                    <div key={pointIndex} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                      <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-400/70 transition-all duration-300" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
                          <div className="absolute inset-0 bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />
                          <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <span className="mt-1">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
