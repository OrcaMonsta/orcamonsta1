"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function HowItWorks() {
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
          HOW IT WORKS
        </h1>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
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

        {/* Additional Information Container */}
        <div className="mt-12 backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 group overflow-hidden">
          <div className="relative z-10">
            <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-4`}>
              ADVANCED FEATURES
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className={`${cornerstone.className} text-xl text-cyan-400 mb-2`}>
                  AUTOMATED LIQUIDITY
                </h3>
                <p className={`${cornerstone.className} text-gray-300 leading-relaxed`}>
                  OUR SMART CONTRACTS AUTOMATICALLY MANAGE LIQUIDITY POOLS TO ENSURE STABLE TRADING CONDITIONS.
                </p>
              </div>
              <div>
                <h3 className={`${cornerstone.className} text-xl text-cyan-400 mb-2`}>
                  REWARD DISTRIBUTION
                </h3>
                <p className={`${cornerstone.className} text-gray-300 leading-relaxed`}>
                  HOLDERS RECEIVE AUTOMATIC REWARDS THROUGH OUR INNOVATIVE TOKENOMICS SYSTEM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
