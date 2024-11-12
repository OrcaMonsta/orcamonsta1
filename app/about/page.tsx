"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

const aboutContent = {
  introduction: {
    title: "INTRODUCING THE ORCA MONSTA ECOSYSTEM",
    content: [
      "WELCOME TO THE FUTURE OF ALGORITHMIC STABILITY IN CRYPTOCURRENCY. ORCA MONSTA REPRESENTS A REVOLUTIONARY APPROACH TO SUSTAINABLE TOKENOMICS, FEATURING AN INTERCONNECTED ECOSYSTEM OF MULTIPLE DISTINCT TOKENS WORKING IN HARMONY.",
      "OUR ECOSYSTEM IS BUILT ON THE SOLANA BLOCKCHAIN, LEVERAGING ITS HIGH-SPEED, LOW-COST INFRASTRUCTURE TO DELIVER AN UNPARALLELED TRADING AND USER EXPERIENCE.",
      "THE ORCA MONSTA PROTOCOL INTRODUCES A SOPHISTICATED MULTI-TOKEN SYSTEM DESIGNED TO MAINTAIN PRICE STABILITY WHILE REWARDING LONG-TERM HOLDERS AND ACTIVE PARTICIPANTS."
    ]
  },
  ecosystem: {
    title: "THE FIVE PILLARS OF STABILITY",
    tokens: [
      {
        name: "$ORCA",
        description: "THE FLAGSHIP GOVERNANCE TOKEN OF OUR ECOSYSTEM",
        features: [
          "TOTAL SUPPLY: 999,000,000 TOKENS",
          "DYNAMIC FEE DISTRIBUTION TO HOLDERS",
          "GOVERNANCE RIGHTS FOR PROTOCOL DECISIONS",
          "STAKING REWARDS AND LIQUIDITY INCENTIVES",
          "DEFLATIONARY MECHANICS THROUGH SYSTEMATIC BURNS"
        ]
      },
      {
        name: "$MYST",
        description: "THE STABILITY MECHANISM TOKEN",
        features: [
          "ALGORITHMIC PRICE STABILIZATION",
          "AUTOMATIC MARKET OPERATIONS",
          "VOLATILITY DAMPENING SYSTEM",
          "CROSS-COLLATERALIZATION SUPPORT",
          "DYNAMIC SUPPLY ADJUSTMENTS"
        ]
      },
      {
        name: "$CANDOUR",
        description: "THE YIELD OPTIMIZATION TOKEN",
        features: [
          "AUTOMATED YIELD STRATEGIES",
          "RISK-ADJUSTED RETURNS",
          "COMPOUND INTEREST MECHANICS",
          "LIQUIDITY MINING REWARDS",
          "YIELD FARMING AGGREGATION"
        ]
      },
      {
        name: "$LOUISXIV",
        description: "THE LUXURY GOVERNANCE TOKEN",
        features: [
          "EXCLUSIVE ACCESS TO PREMIUM FEATURES",
          "ENHANCED VOTING POWER",
          "PRIORITY FEE DISTRIBUTION",
          "VIP PLATFORM BENEFITS",
          "SPECIAL EVENT ACCESS"
        ]
      },
      {
        name: "$SUPASEXI",
        description: "THE COMMUNITY REWARDS TOKEN",
        features: [
          "SOCIAL ENGAGEMENT REWARDS",
          "COMMUNITY EVENT PARTICIPATION",
          "LOYALTY PROGRAM BENEFITS",
          "GAMIFICATION REWARDS",
          "SOCIAL TRADING INCENTIVES"
        ]
      }
    ]
  },
  technology: {
    title: "TECHNOLOGICAL INNOVATION",
    features: [
      "ADVANCED ALGORITHMIC STABILITY MECHANISMS",
      "CROSS-TOKEN COLLATERALIZATION",
      "AUTOMATED MARKET MAKING (AMM) OPTIMIZATION",
      "DYNAMIC FEE ADJUSTMENT PROTOCOL",
      "MULTI-LAYER SECURITY ARCHITECTURE",
      "REAL-TIME PRICE FEED ORACLES",
      "SMART CONTRACT AUTOMATION"
    ]
  },
  tokenomics: {
    title: "ADVANCED TOKENOMICS",
    sections: [
      {
        subtitle: "FEE STRUCTURE",
        points: [
          "DYNAMIC TRADING FEES: 0.15% - 5%",
          "PROPORTIONAL DISTRIBUTION TO HOLDERS",
          "AUTOMATED REBALANCING MECHANISM",
          "VOLUME-BASED SCALING",
          "CROSS-TOKEN INCENTIVES"
        ]
      },
      {
        subtitle: "STABILITY MECHANISMS",
        points: [
          "ALGORITHMIC SUPPLY ADJUSTMENTS",
          "MULTI-TOKEN COLLATERALIZATION",
          "AUTOMATED BURN MECHANISMS",
          "LIQUIDITY DEPTH MANAGEMENT",
          "PRICE IMPACT MITIGATION"
        ]
      }
    ]
  },
  roadmap: {
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
  },
  vision: {
    title: "FUTURE VISION",
    content: [
      "ORCA MONSTA AIMS TO REVOLUTIONIZE CRYPTOCURRENCY BY CREATING A SELF-SUSTAINING, ALGORITHMICALLY STABLE ECOSYSTEM THAT REWARDS PARTICIPATION AND PROMOTES LONG-TERM GROWTH.",
      "OUR MULTI-TOKEN APPROACH ENSURES STABILITY WHILE PROVIDING DIVERSE OPPORTUNITIES FOR USERS TO ENGAGE WITH THE PLATFORM AND EARN REWARDS.",
      "THROUGH CONTINUOUS INNOVATION AND COMMUNITY ENGAGEMENT, WE STRIVE TO BUILD THE MOST ROBUST AND USER-FRIENDLY ECOSYSTEM ON SOLANA."
    ]
  }
}

export default function About() {
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
          ABOUT ORCA MONSTA
        </h1>

        {/* Introduction Section */}
        <div className="space-y-8 mb-12">
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300 group overflow-hidden">
            <div className="relative z-10">
              <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-4`}>
                {aboutContent.introduction.title}
              </h2>
              <div className="space-y-4">
                {aboutContent.introduction.content.map((text, index) => (
                  <div key={index} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                    <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-400/70 transition-all duration-300" />
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />
                        <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
                      </div>
                    </div>
                    <span className="mt-1">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ecosystem Section */}
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
            transform transition-all duration-300 group overflow-hidden">
            <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-6`}>
              {aboutContent.ecosystem.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aboutContent.ecosystem.tokens.map((token, index) => (
                <div key={index} className="space-y-4">
                  <h3 className={`${cornerstone.className} text-xl font-bold text-cyan-400`}>
                    {token.name}
                  </h3>
                  <p className={`${cornerstone.className} text-gray-400 mb-3`}>
                    {token.description}
                  </p>
                  <div className="space-y-2">
                    {token.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                        <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
                          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-green-500/50 to-transparent group-hover:from-green-400/70 transition-all duration-300" />
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full group-hover:bg-green-400/30 transition-all duration-300" />
                            <div className="absolute inset-[2px] bg-green-400/40 rounded-full animate-pulse" />
                          </div>
                        </div>
                        <span className="mt-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 group overflow-hidden">
          <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-6`}>
            {aboutContent.technology.title}
          </h2>
          <div className="space-y-4">
            {aboutContent.technology.features.map((feature, index) => (
              <div key={index} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-400/70 transition-all duration-300" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />
                    <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
                  </div>
                </div>
                <span className="mt-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tokenomics Section */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 group overflow-hidden">
          <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-6`}>
            {aboutContent.tokenomics.title}
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {aboutContent.tokenomics.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className={`${cornerstone.className} text-xl font-bold text-cyan-400`}>
                  {section.subtitle}
                </h3>
                <div className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <div key={pointIndex} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                      <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-green-500/50 to-transparent group-hover:from-green-400/70 transition-all duration-300" />
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
                          <div className="absolute inset-0 bg-green-500/20 rounded-full group-hover:bg-green-400/30 transition-all duration-300" />
                          <div className="absolute inset-[2px] bg-green-400/40 rounded-full animate-pulse" />
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

        {/* Roadmap Section */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 group overflow-hidden">
          <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-6`}>
            {aboutContent.roadmap.title}
          </h2>
          <div className="space-y-8">
            {aboutContent.roadmap.phases.map((phase, index) => (
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

        {/* Vision Section */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 group overflow-hidden">
          <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-6`}>
            {aboutContent.vision.title}
          </h2>
          <div className="space-y-4">
            {aboutContent.vision.content.map((text, index) => (
              <div key={index} className={`${cornerstone.className} text-gray-300 flex items-start group`}>
                <div className="flex-shrink-0 w-6 mr-4 mt-[0.9rem] relative">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent group-hover:from-cyan-400/70 transition-all duration-300" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2">
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-full group-hover:bg-cyan-400/30 transition-all duration-300" />
                    <div className="absolute inset-[2px] bg-cyan-400/40 rounded-full animate-pulse" />
                  </div>
                </div>
                <span className="mt-1">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className={`${cornerstone.className} text-2xl text-cyan-400 mb-4`}>
            JOIN THE ORCA MONSTA REVOLUTION
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="https://t.me/orca_monsta"
              target="_blank"
              rel="noopener noreferrer"
              className={`${cornerstone.className} px-6 py-3 bg-gradient-to-r from-cyan-500 to-green-500 
                rounded-lg text-white font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
                transition-all duration-300`}
            >
              JOIN TELEGRAM
            </a>
            <a
              href="https://x.com/OrcaMonsta"
              target="_blank"
              rel="noopener noreferrer"
              className={`${cornerstone.className} px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 
                rounded-lg text-white font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
                transition-all duration-300`}
            >
              FOLLOW TWITTER
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
