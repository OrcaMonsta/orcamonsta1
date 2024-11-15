"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

// Add this function to handle the PDF download
const handleDownload = () => {
  // Direct link to the PDF file in the public folder
  const pdfUrl = '/Whitepaper.pdf';  // Make sure this matches the exact filename in your public folder
  
  // Create a link element
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.setAttribute('download', 'Whitepaper.pdf');  // Set the download filename
  
  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Whitepaper() {
  const sections = [
    {
      title: "INTRODUCTION & VISION",
      content: [
        {
          subtitle: "WELCOME TO ORCA",
          details: [
            "DESIGNED FOR FAIRNESS AND TRANSPARENCY",
            "REWARDS TOP 50 HOLDERS WITH TRADE FEES",
            "COMMUNITY-DRIVEN ECONOMY",
            "LOYALTY AND PARTICIPATION REWARDS",
            "STRONG, SUPPORTIVE NETWORK"
          ]
        },
        {
          subtitle: "HOW IT WORKS",
          details: [
            "FEE DISTRIBUTION FROM ON-CHAIN TRANSACTIONS",
            "PROPORTIONAL DISTRIBUTION TO TOP 50 HOLDERS",
            "RANDOMIZED INTERVAL DISTRIBUTIONS",
            "TRANSPARENT BLOCKCHAIN VERIFICATION",
            "AUTOMATED REWARD SYSTEM"
          ]
        }
      ]
    },
    {
      title: "TOKENOMICS & BENEFITS",
      content: [
        {
          subtitle: "TOKEN METRICS",
          details: [
            "TOTAL SUPPLY: 999,000,000 ORCA",
            "FAIRLAUNCH - NO PRE-MINES",
            "NO INSIDER ALLOCATIONS",
            "DYNAMIC FEES: 0.15% - 5% PER TRADE",
            "VOLUME-BASED FEE DISTRIBUTION",
            "BURN FUNCTION TO REDUCE TOTAL SUPPLY"
          ]
        },
        {
          subtitle: "HOLDER BENEFITS",
          details: [
            "PASSIVE INCOME FOR TOP HOLDERS",
            "ENHANCED COMMUNITY ENGAGEMENT",
            "LONG-TERM HOLDING INCENTIVES",
            "SELF-SUSTAINING ECOSYSTEM",
            "CONTINUOUS TRADING REWARDS"
          ]
        }
      ]
    },
    {
      title: "ROADMAP & FUTURE",
      content: [
        {
          subtitle: "DEVELOPMENT PHASES",
          details: [
            "PHASE 1: FOUNDATION - LAUNCH, FEE DISTRIBUTION, COMMUNITY BUILDING",
            "PHASE 2: EXPANSION - NEW TOKENS, NFT DEVELOPMENT, PARTNERSHIPS",
            "PHASE 3: INNOVATION - ECOSYSTEM GROWTH, GOVERNANCE, REWARDS",
            "PHASE 4: MATURITY - FULL INTEGRATION, ADVANCED FEATURES, GLOBAL EXPANSION",
            "PHASE 5: IMPROVEMENTS - CONTINUOUS DEVELOPMENT & ENHANCEMENTS"
          ]
        },
        {
          subtitle: "ECOSYSTEM GROWTH",
          details: [
            "EXPANDING PARTNERSHIPS",
            "PLATFORM INTEGRATIONS",
            "COMMUNITY GOVERNANCE",
            "ENHANCED UTILITY",
            "MARKET EXPANSION"
          ]
        }
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
          WHITEPAPER
        </h1>

        {/* Technical Documentation */}
        <div className="grid gap-8">
          {sections.map((section, index) => (
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
                <h2 className={`${cornerstone.className} text-3xl font-bold text-green-400 mb-6`}>
                  {section.title}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {section.content.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className={`${cornerstone.className} text-xl text-cyan-400 mb-4`}>
                        {subsection.subtitle}
                      </h3>
                      <ul className="space-y-3">
                        {subsection.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" 
                              fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className={`${cornerstone.className} text-gray-300`}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="mt-8 text-center">
          <button 
            onClick={handleDownload}
            className={`${cornerstone.className} px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
              border border-cyan-500/50 rounded-xl hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
              transition-all duration-300`}
          >
            DOWNLOAD FULL WHITEPAPER PDF
          </button>
        </div>
      </div>
    </main>
  )
}
