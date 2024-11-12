"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Terms() {
  const sections = [
    {
      title: "TERMS OF USE",
      content: [
        "BY ACCESSING AND USING THE ORCA MONSTA PLATFORM AND SERVICES, YOU AGREE TO THESE TERMS OF USE.",
        "THESE TERMS CONSTITUTE A LEGALLY BINDING AGREEMENT BETWEEN YOU AND ORCA MONSTA.",
        "IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE OUR SERVICES.",
        "WE RESERVE THE RIGHT TO MODIFY THESE TERMS AT ANY TIME WITH IMMEDIATE EFFECT.",
        "CONTINUED USE OF OUR SERVICES CONSTITUTES ACCEPTANCE OF MODIFIED TERMS."
      ]
    },
    {
      title: "USER RESPONSIBILITIES",
      content: [
        "USERS MUST BE OF LEGAL AGE IN THEIR JURISDICTION",
        "USERS ARE RESPONSIBLE FOR MAINTAINING THEIR WALLET SECURITY",
        "USERS MUST COMPLY WITH ALL APPLICABLE LAWS AND REGULATIONS",
        "USERS MUST NOT ENGAGE IN ANY FRAUDULENT OR MALICIOUS ACTIVITY",
        "USERS MUST MAINTAIN SECURE CUSTODY OF PRIVATE KEYS",
        "USERS MUST IMPLEMENT STRONG PASSWORDS AND SECURITY MEASURES",
        "USERS MUST REPORT ANY SUSPICIOUS ACTIVITIES IMMEDIATELY",
        "USERS MUST VERIFY ALL TRANSACTION DETAILS BEFORE CONFIRMATION"
      ]
    },
    {
      title: "PLATFORM SERVICES",
      content: [
        "ORCA MONSTA PROVIDES DEFI SERVICES ON THE SOLANA BLOCKCHAIN",
        "SERVICES INCLUDE TOKEN SWAPS, LIQUIDITY PROVISION, AND YIELD FARMING",
        "WE RESERVE THE RIGHT TO MODIFY OR DISCONTINUE SERVICES",
        "SERVICE AVAILABILITY MAY BE AFFECTED BY NETWORK CONDITIONS",
        "SMART CONTRACT INTERACTIONS ARE FINAL AND IRREVERSIBLE",
        "USERS MUST VERIFY CONTRACT ADDRESSES BEFORE TRANSACTIONS",
        "PLATFORM FEATURES MAY BE SUBJECT TO GAS FEES AND NETWORK COSTS",
        "SERVICES MAY BE RESTRICTED IN CERTAIN JURISDICTIONS"
      ]
    },
    {
      title: "TOKEN ECONOMICS",
      content: [
        "ORCA TOKEN SERVES AS THE NATIVE UTILITY TOKEN",
        "TOKEN HOLDERS MAY RECEIVE GOVERNANCE RIGHTS AND VOTING POWER",
        "STAKING REWARDS AND YIELD GENERATION OPPORTUNITIES AVAILABLE",
        "TRADING FEE DISCOUNTS FOR TOKEN HOLDERS",
        "TOKEN VALUE MAY FLUCTUATE BASED ON MARKET CONDITIONS",
        "NO GUARANTEES OF TOKEN PRICE OR RETURNS",
        "TOKENOMICS SUBJECT TO COMMUNITY GOVERNANCE DECISIONS",
        "HOLDING TOKENS GRANTS ACCESS TO EXCLUSIVE FEATURES"
      ]
    },
    {
      title: "RISKS & DISCLAIMERS",
      content: [
        "CRYPTOCURRENCY TRADING INVOLVES SUBSTANTIAL RISK",
        "PAST PERFORMANCE DOES NOT GUARANTEE FUTURE RESULTS",
        "USERS SHOULD INVEST ONLY WHAT THEY CAN AFFORD TO LOSE",
        "WE ARE NOT RESPONSIBLE FOR ANY LOSSES INCURRED",
        "SMART CONTRACT RISKS AND VULNERABILITIES MAY EXIST",
        "NETWORK CONGESTION MAY AFFECT TRANSACTION TIMING",
        "REGULATORY CHANGES MAY IMPACT SERVICE AVAILABILITY",
        "MARKET MANIPULATION RISKS IN CRYPTO MARKETS",
        "TECHNICAL UPGRADES MAY AFFECT FUNCTIONALITY",
        "CYBERSECURITY RISKS ARE INHERENT IN BLOCKCHAIN"
      ]
    },
    {
      title: "INTELLECTUAL PROPERTY",
      content: [
        "ALL PLATFORM CONTENT IS PROTECTED BY COPYRIGHT",
        "TRADEMARKS AND LOGOS ARE PROPERTY OF ORCA MONSTA",
        "USERS MAY NOT COPY OR REPRODUCE CONTENT WITHOUT PERMISSION",
        "UNAUTHORIZED USE MAY RESULT IN LEGAL ACTION"
      ]
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-2`}>
          TERMS OF SERVICE
        </h1>
        
        <p className={`${cornerstone.className} text-gray-300 mb-8`}>
          LAST UPDATED: {new Date().toLocaleDateString('en-US', { 
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).toUpperCase()}
        </p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
              transform transition-all duration-300 group overflow-hidden hover:bg-black/40">
              {/* Animated corner effects */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <div className="absolute w-full h-full animate-pulse">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
              </div>
              
              <div className="relative z-10">
                <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-4`}>
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((text, textIndex) => (
                    <div 
                      key={textIndex} 
                      className={`${cornerstone.className} text-gray-300 flex items-start group mb-3`}
                    >
                      <div className="flex-shrink-0 w-3 h-3 mt-2 mr-4 relative">
                        <div className="absolute inset-0 border border-cyan-500/30 rounded-full group-hover:border-cyan-400/50 transition-all duration-300" />
                        <div className="absolute inset-[3px] bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300">
                          <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
                        </div>
                      </div>
                      <span className="mt-1">{text}</span>
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
