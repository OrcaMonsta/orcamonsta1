"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function NFTs() {
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
          ORCA MONSTA NFTs
        </h1>

        {/* Development Disclaimer */}
        <div className="backdrop-blur-md bg-cyan-500/10 rounded-xl p-8 border border-cyan-500/30
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300">
          
          {/* Animated Pulse Indicator */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <h2 className={`${cornerstone.className} text-2xl text-cyan-400`}>
              DEVELOPMENT IN PROGRESS
            </h2>
          </div>

          <div className={`${cornerstone.className} text-gray-300 space-y-4`}>
            <p>
              OUR NFT COLLECTION IS CURRENTLY UNDER DEVELOPMENT. WE ARE WORKING TO CREATE 
              UNIQUE AND VALUABLE DIGITAL ASSETS FOR THE ORCA MONSTA COMMUNITY.
            </p>
            <p>
              STAY TUNED FOR THE OFFICIAL RELEASE! ANNOUNCEMENTS WILL BE MADE ON OUR{' '}
              <Link href="/announcements" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ANNOUNCEMENTS PAGE
              </Link>{' '}
              AND SOCIAL MEDIA PLATFORMS.
            </p>
          </div>

          {/* Coming Soon Banner */}
          <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
            border border-cyan-500/50 rounded-lg text-center">
            <span className={`${cornerstone.className} text-xl text-green-400`}>
              COMING SOON
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
