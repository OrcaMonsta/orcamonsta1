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
            <div key="1" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>DESIGNED FOR FAIRNESS AND TRANSPARENCY</span>
            </div>,
            <div key="2" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>REWARDS TOP 50 HOLDERS WITH TRADE FEES</span>
            </div>,
            <div key="3" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>COMMUNITY-DRIVEN ECONOMY</span>
            </div>,
            <div key="4" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>LOYALTY AND PARTICIPATION REWARDS</span>
            </div>,
            <div key="5" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>STRONG, SUPPORTIVE NETWORK</span>
            </div>
          ]
        },
        {
          subtitle: "HOW IT WORKS",
          details: [
            <div key="1" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>FEE DISTRIBUTION FROM ON-CHAIN TRANSACTIONS</span>
            </div>,
            <div key="2" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PROPORTIONAL DISTRIBUTION TO TOP 50 HOLDERS</span>
            </div>,
            <div key="3" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>RANDOMIZED INTERVAL DISTRIBUTIONS</span>
            </div>,
            <div key="4" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>TRANSPARENT BLOCKCHAIN VERIFICATION</span>
            </div>,
            <div key="5" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>AUTOMATED REWARD SYSTEM</span>
            </div>
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
            <div key="1" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>TOTAL SUPPLY: 999,000,000 ORCA</span>
            </div>,
            <div key="2" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>FAIRLAUNCH - NO PRE-MINES</span>
            </div>,
            <div key="3" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>NO INSIDER ALLOCATIONS</span>
            </div>,
            <div key="4" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>DYNAMIC FEES: 0.15% - 5% PER TRADE</span>
            </div>,
            <div key="5" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>VOLUME-BASED FEE DISTRIBUTION</span>
            </div>,
            <div key="6" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>BURN FUNCTION TO REDUCE TOTAL SUPPLY</span>
            </div>
          ]
        },
        {
          subtitle: "HOLDER BENEFITS",
          details: [
            <div key="1" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PASSIVE INCOME FOR TOP HOLDERS</span>
            </div>,
            <div key="2" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>ENHANCED COMMUNITY ENGAGEMENT</span>
            </div>,
            <div key="3" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>LONG-TERM HOLDING INCENTIVES</span>
            </div>,
            <div key="4" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>SELF-SUSTAINING ECOSYSTEM</span>
            </div>,
            <div key="5" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>CONTINUOUS TRADING REWARDS</span>
            </div>
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
            <div key="1" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PHASE 1: FOUNDATION<br/>
                LAUNCH, FEE DISTRIBUTION, COMMUNITY BUILDING</span>
            </div>,
            <div key="2" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PHASE 2: EXPANSION<br/>
                NEW TOKENS, NFT DEVELOPMENT, PARTNERSHIPS</span>
            </div>,
            <div key="3" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PHASE 3: INNOVATION<br/>
                ECOSYSTEM GROWTH, GOVERNANCE, REWARDS</span>
            </div>,
            <div key="4" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PHASE 4: MATURITY<br/>
                FULL INTEGRATION, ADVANCED FEATURES, GLOBAL EXPANSION</span>
            </div>,
            <div key="5" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PHASE 5: IMPROVEMENTS<br/>
                CONTINUOUS DEVELOPMENT & ENHANCEMENTS</span>
            </div>
          ]
        },
        {
          subtitle: "ECOSYSTEM GROWTH",
          details: [
            <div key="1" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>EXPANDING PARTNERSHIPS</span>
            </div>,
            <div key="2" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>PLATFORM INTEGRATIONS</span>
            </div>,
            <div key="3" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>COMMUNITY GOVERNANCE</span>
            </div>,
            <div key="4" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>ENHANCED UTILITY</span>
            </div>,
            <div key="5" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>MARKET & COMMUNITY EXPANSION</span>
            </div>,
            <div key="6" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>IMPLEMENTATION OF NFTS</span>
            </div>,
            <div key="7" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>INCREASED VOLUME & TRADING ACTIVITY</span>
            </div>,
            <div key="8" className="flex items-start">
              <div className="flex-shrink-0 w-4 mr-3 mt-[0.6rem] relative">
                <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent 
                  group-hover:from-cyan-400/70 transition-all duration-300" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 
                  bg-cyan-400/40 rounded-full animate-pulse" />
              </div>
              <span>DEX, KEY OPINION LEADERS & COMMUNITY PROMOTIONS</span>
            </div>
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
                          <li key={detailIndex} className={`${cornerstone.className} text-gray-300`}>
                            {detail}
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
