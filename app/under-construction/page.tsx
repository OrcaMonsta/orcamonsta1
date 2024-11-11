"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function UnderConstruction() {
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        {/* Animated Construction Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl animate-pulse"></div>
          <svg className="w-24 h-24 text-cyan-400 relative animate-bounce" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        {/* Main Title */}
        <h1 className={`${cornerstone.className} text-5xl md:text-6xl font-bold text-center mb-6
          bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text`}>
          UNDER CONSTRUCTION
        </h1>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-green-500 w-3/4
              animate-progress-flow"></div>
          </div>
          <div className="flex justify-between mt-2 text-gray-400 text-sm">
            <span>PROGRESS</span>
            <span>75%</span>
          </div>
        </div>

        {/* Info Container */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 max-w-2xl w-full text-center">
          <p className={`${cornerstone.className} text-xl text-gray-300 mb-6`}>
            WE ARE WORKING HARD TO BRING YOU SOMETHING AMAZING.
            THIS PAGE WILL BE AVAILABLE SOON!
          </p>
          
          {/* Features Coming Soon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {['DEFI', 'STAKING', 'FARMING', 'REWARDS'].map((feature, index) => (
              <div key={index} className="flex items-center justify-center p-3
                bg-white/5 rounded-lg border border-gray-800/50">
                <span className={`${cornerstone.className} text-cyan-400`}>{feature}</span>
              </div>
            ))}
          </div>

          {/* Notification Form */}
          <form 
            action="mailto:OrcaMonsta@proton.me" 
            method="post" 
            encType="text/plain"
            className="flex gap-2"
          >
            <input 
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-black/30 rounded-lg border border-gray-800/50 px-4 py-2
                focus:outline-none focus:border-cyan-500/50 transition-colors"
              required
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
                transition-all duration-300"
            >
              NOTIFY ME
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            <a 
              href="https://x.com/OrcaMonsta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              TWITTER
            </a>
            <a 
              href="https://t.me/orca_monsta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              TELEGRAM
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              DISCORD
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
