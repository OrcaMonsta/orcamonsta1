"use client"

import React from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Privacy() {
  const sections = [
    {
      title: "PRIVACY POLICY",
      content: [
        "THIS PRIVACY POLICY EXPLAINS HOW ORCA MONSTA COLLECTS, USES, AND PROTECTS YOUR PERSONAL INFORMATION.",
        "BY USING OUR PLATFORM, YOU CONSENT TO THE DATA PRACTICES DESCRIBED IN THIS POLICY.",
        "WE ARE COMMITTED TO PROTECTING YOUR PRIVACY AND MAINTAINING THE SECURITY OF YOUR INFORMATION.",
        "WE RESERVE THE RIGHT TO UPDATE THIS POLICY AT ANY TIME, OF WHICH YOU WILL BE PROMPTLY UPDATED.",
        "IF YOU WANT TO ENSURE YOU ARE UP TO DATE WITH THE LATEST CHANGES, WE ADVISE YOU TO FREQUENTLY VISIT THIS PAGE."
      ]
    },
    {
      title: "INFORMATION WE COLLECT",
      subsections: [
        {
          subtitle: "WALLET INFORMATION",
          points: [
            "PUBLIC WALLET ADDRESSES",
            "TRANSACTION HISTORY",
            "SMART CONTRACT INTERACTIONS",
            "LIQUIDITY POOL POSITIONS",
            "TOKEN BALANCES AND TRANSFERS",
            "DEFI PROTOCOL INTERACTIONS",
            "STAKING ACTIVITIES",
            "YIELD FARMING POSITIONS"
          ]
        },
        {
          subtitle: "TECHNICAL DATA",
          points: [
            "IP ADDRESSES",
            "BROWSER TYPE AND VERSION",
            "DEVICE INFORMATION",
            "OPERATING SYSTEM",
            "NETWORK INFORMATION",
            "INTERACTION PATTERNS",
            "SESSION DURATION",
            "FEATURE USAGE METRICS",
            "PERFORMANCE DATA",
            "ERROR LOGS"
          ]
        },
        {
          subtitle: "USER BEHAVIOR",
          points: [
            "PLATFORM NAVIGATION PATTERNS",
            "FEATURE PREFERENCES",
            "TRADING PATTERNS",
            "INTERACTION FREQUENCY",
            "PREFERRED ASSETS",
            "TRADING PAIR PREFERENCES",
            "PLATFORM ENTRY/EXIT POINTS"
          ]
        }
      ]
    },
    {
      title: "HOW WE USE YOUR INFORMATION",
      content: [
        "TO PROVIDE AND MAINTAIN OUR SERVICES",
        "TO PROCESS YOUR TRANSACTIONS",
        "TO IMPROVE USER EXPERIENCE",
        "TO DETECT AND PREVENT FRAUD",
        "TO COMPLY WITH LEGAL OBLIGATIONS",
        "TO OPTIMIZE PLATFORM PERFORMANCE",
        "TO ENHANCE SECURITY MEASURES",
        "TO ANALYZE USAGE PATTERNS",
        "TO IMPROVE PLATFORM FEATURES",
        "TO DEVELOP NEW SERVICES",
        "TO PROVIDE TECHNICAL SUPPORT",
        "TO SEND IMPORTANT UPDATES",
        "TO CONDUCT MARKET ANALYSIS",
        "TO MAINTAIN PLATFORM INTEGRITY"
      ]
    },
    {
      title: "DATA SECURITY",
      content: [
        "WE IMPLEMENT INDUSTRY-STANDARD SECURITY MEASURES",
        "DATA IS ENCRYPTED DURING TRANSMISSION",
        "REGULAR SECURITY AUDITS ARE CONDUCTED",
        "ACCESS TO USER DATA IS STRICTLY CONTROLLED",
        "MULTI-LAYER SECURITY PROTOCOLS",
        "24/7 SECURITY MONITORING",
        "AUTOMATED THREAT DETECTION",
        "REGULAR PENETRATION TESTING",
        "SECURE DATA STORAGE PRACTICES",
        "INCIDENT RESPONSE PROCEDURES"
      ]
    },
    {
      title: "YOUR RIGHTS",
      content: [
        "RIGHT TO ACCESS YOUR DATA",
        "RIGHT TO CORRECT INACCURATE DATA",
        "RIGHT TO DELETE YOUR DATA",
        "RIGHT TO OBJECT TO PROCESSING",
        "RIGHT TO DATA PORTABILITY",
        "RIGHT TO WITHDRAW CONSENT",
        "RIGHT TO FILE COMPLAINTS",
        "RIGHT TO RESTRICT PROCESSING",
        "RIGHT TO BE INFORMED",
        "RIGHT TO DATA TRANSPARENCY"
      ]
    },
    {
      title: "COOKIES AND TRACKING",
      content: [
        "WE USE ESSENTIAL COOKIES FOR PLATFORM FUNCTIONALITY",
        "ANALYTICS COOKIES HELP US IMPROVE OUR SERVICES",
        "YOU CAN CONTROL COOKIE SETTINGS IN YOUR BROWSER",
        "THIRD-PARTY COOKIES MAY BE USED FOR ANALYTICS",
        "SESSION COOKIES TRACK USER ACTIVITY",
        "PERSISTENT COOKIES REMEMBER PREFERENCES",
        "PERFORMANCE COOKIES MONITOR PLATFORM HEALTH",
        "SECURITY COOKIES PROTECT USER SESSIONS",
        "CUSTOMIZATION COOKIES ENHANCE UX",
        "TRACKING PIXELS FOR ANALYTICS"
      ]
    },
    {
      title: "THIRD-PARTY INTEGRATIONS",
      content: [
        "INTEGRATION WITH BLOCKCHAIN NETWORKS",
        "DEFI PROTOCOL CONNECTIONS",
        "WALLET PROVIDER INTERACTIONS",
        "ANALYTICS SERVICES",
        "SECURITY PROVIDERS",
        "INFRASTRUCTURE SERVICES",
        "API INTEGRATIONS",
        "MONITORING SERVICES",
        "PAYMENT PROCESSORS",
        "DEVELOPMENT TOOLS"
      ]
    },
    {
      title: "DATA RETENTION",
      content: [
        "TRANSACTION DATA STORED INDEFINITELY",
        "TECHNICAL LOGS RETAINED FOR 90 DAYS",
        "USER PREFERENCES STORED UNTIL DELETION",
        "ANALYTICS DATA KEPT FOR 12 MONTHS",
        "BACKUP DATA RETAINED FOR 30 DAYS",
        "SECURITY LOGS STORED FOR 1 YEAR",
        "COMPLIANCE RECORDS AS REQUIRED BY LAW",
        "AUTOMATED DATA CLEANUP PROCEDURES",
        "USER-REQUESTED DELETIONS WITHIN 30 DAYS",
        "ARCHIVAL DATA MANAGEMENT POLICIES"
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-2`}>
          PRIVACY POLICY
        </h1>
        
        <p className={`${cornerstone.className} text-gray-300 mb-8`}>
          LAST UPDATED: {new Date().toLocaleDateString('en-US', { 
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }).toUpperCase()}
        </p>

        <div className="space-y-8">
          {/* Privacy Sections */}
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
                <h2 className={`${cornerstone.className} text-2xl font-bold text-green-400 mb-4`}>
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content ? (
                    // Render regular content
                    section.content.map((text, textIndex) => (
                      <p key={textIndex} className={`${cornerstone.className} text-gray-300`}>
                        {text}
                      </p>
                    ))
                  ) : section.subsections ? (
                    // Render subsections
                    section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="mb-6 last:mb-0">
                        <h3 className={`${cornerstone.className} text-xl font-bold text-cyan-400 mb-3`}>
                          {subsection.subtitle}
                        </h3>
                        <div className="space-y-2">
                          {subsection.points.map((point, pointIndex) => (
                            <p key={pointIndex} className={`${cornerstone.className} text-gray-300`}>
                              {point}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
