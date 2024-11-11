"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Team() {
  const teamMembers = [
    {
      name: "ALEX WRIGHT",
      role: "FOUNDER & CEO",
      description: "BLOCKCHAIN VETERAN WITH 8+ YEARS OF EXPERIENCE IN DEFI DEVELOPMENT AND ECOSYSTEM BUILDING.",
      expertise: ["BLOCKCHAIN ARCHITECTURE", "TOKENOMICS", "STRATEGIC PLANNING"],
      image: "/team/member1.jpg" // Add team member images to public/team/
    },
    {
      name: "SARAH CHEN",
      role: "LEAD DEVELOPER",
      description: "SOLANA BLOCKCHAIN SPECIALIST WITH EXTENSIVE EXPERIENCE IN SMART CONTRACT DEVELOPMENT.",
      expertise: ["SMART CONTRACTS", "PROTOCOL DESIGN", "SECURITY"],
      image: "/team/member2.jpg"
    },
    {
      name: "MARCUS JOHNSON",
      role: "HEAD OF OPERATIONS",
      description: "FORMER FINTECH EXECUTIVE BRINGING TRADITIONAL FINANCE EXPERTISE TO THE DEFI SPACE.",
      expertise: ["OPERATIONS", "RISK MANAGEMENT", "COMPLIANCE"],
      image: "/team/member3.jpg"
    },
    {
      name: "ELENA RODRIGUEZ",
      role: "MARKETING DIRECTOR",
      description: "CRYPTO MARKETING SPECIALIST WITH A TRACK RECORD OF SUCCESSFUL PROJECT LAUNCHES.",
      expertise: ["BRAND STRATEGY", "COMMUNITY GROWTH", "PARTNERSHIPS"],
      image: "/team/member4.jpg"
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
          OUR TEAM
        </h1>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]">
              {/* Add your member card components here */}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
