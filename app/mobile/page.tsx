'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

const MobilePage = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = "CALYAYTQWNYZA8WSZJSFNFUWUVMGKQE0F9HX9";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
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

      {/* Content Sections - Stacked Vertically */}
      <div className="relative z-10 px-4 py-6 flex flex-col gap-8">
        {/* Header/Contract Info */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-4 border border-gray-800/50">
          <div className="flex flex-col gap-2">
            <span className="text-green-400 font-bold">ORCA MONSTA</span>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>CONTRACT:</span>
              <button onClick={copyToClipboard} className="flex items-center gap-1 group">
                <span className="font-mono text-xs relative group-hover:text-green-400 transition-colors duration-300">
                  {contractAddress}
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded 
                    transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    Copied!
                  </span>
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Rest of your components */}
      </div>
    </div>
  )
}

export default MobilePage
