"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contractAddress = "CALYAYTQWNYZA8WSZJSFNFUWUVMGKQE0F9HX9";

  const menuItems = [
    { name: "About", href: "/under-construction" },
    { name: "How it works", href: "/under-construction" },
    { name: "Roadmap", href: "/under-construction" },
    { name: "Whitepaper", href: "/under-construction" },
    { name: "Team", href: "/under-construction" },
    { name: "Contact", href: "/under-construction" },
    { name: "Terms", href: "/under-construction" },
    { name: "Privacy", href: "/under-construction" }
];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Effect */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full 
            bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
            bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]
            animate-grid-flow"></div>
        </div>

        {/* Subtle Glow Points */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-[128px] animate-pulse delay-700"></div>
      </div>

      {/* Contract Info Banner */}
      <div className="absolute top-[38px] left-40 flex items-center gap-4 z-20">
        <div className="backdrop-blur-md bg-black/30 rounded-xl px-6 py-2.5 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300">
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-bold">
              ORCA MONSTA - DEVELOPED BY{' '}
              <a 
                href="https://x.com/STACCoverflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-300"
              >
                @STACCOVERFLOW
              </a>
            </span>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">CONTRACT:</span>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-1 group"
              >
                <span className="font-mono text-sm relative group-hover:text-green-400 transition-colors duration-300">
                  {contractAddress}
                  <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded 
                    transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    Copied!
                  </span>
                </span>
                <svg 
                  className="w-4 h-4 transition-all duration-300 group-hover:text-green-400 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fancy Dropdown Menu */}
      <div className="absolute top-10 left-10 z-20 font-cornerstone">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 backdrop-blur-md bg-black/30 rounded-xl border border-gray-800/50 
            hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all duration-300"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="font-bold">Menu</span>
        </button>

        {isMenuOpen && (
          <div className="absolute top-full mt-2 w-48 backdrop-blur-md bg-black/30 rounded-2xl border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)] overflow-hidden animate-fadeIn">
            {/* Menu Items Container */}
            <div className="relative py-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 hover:bg-white/10 transition-colors duration-300 relative group"
                >
                  {/* Animated hover effect for each item */}
                  <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-green-500/50 
                    scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {item.name}
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                      text-cyan-400">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Background Banner - half page width, full height */}
      <div className="absolute top-0 right-0 w-1/2">
        <Image
          src="/orcabanner.jpg"
          alt="Orca Banner"
          width={800}  // Adjust to your image's dimensions
          height={1200} // Adjust to your image's dimensions
          priority
          className="w-full h-auto opacity-60"
          style={{ 
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0))'
          }}
        />
        {/* Optional overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-30"></div>
      </div>

      {/* Right side content */}
      <div className="absolute right-10 top-1/3 max-w-md z-10">
        <h1 className={`${cornerstone.className} text-2xl font-bold mb-4 text-shadow-lg`}>
          STEP INTO THE TRENCHES AND GET AN EXCLUSIVE LOOK AT THE MAKING OF $ORCA
        </h1>
        <p className={`${cornerstone.className} text-sm mb-6 text-shadow-lg`}>
          BEST EXPERIENCED ON A MOBILE DEVICE
        </p>
        <button className={`${cornerstone.className} border border-white px-8 py-2 hover:bg-white hover:text-black transition-colors backdrop-blur-sm`}>
          START
        </button>
      </div>

      {/* 3D Rotating Cards Container */}
      <div className="absolute right-20 bottom-14 w-[900px] h-[450px] preserve-3d perspective">
        <div className="relative w-full h-full animate-3d-spin">
          {[
            {
              title: "CONSTANT REVENUE",
              description: "ENJOY CONSTANT REVENUE FROM FEES GENERATED BY ORGANIC & AUTOMATED TRANSACTIONS FROM MULTIPLE LIQUIDITY POOLS, BY HOLDING $ORCA.",
              icon: (
                <svg className="w-12 h-12 text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            },
            {
              title: "APPRECIATING ASSET",
              description: "ENJOY THE INHERENT APPRECIATION OF ORCA MONSTA AS BURN FUNCTIONS CONTINUALLY REDUCE THE AMOUNTS OF ORCA MONSTA IN CIRCULATION.",
              icon: (
                <svg className="w-12 h-12 text-cyan-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              )
            },
            {
              title: "EASY",
              description: "BROUGHT TO YOU ON THE SOLANA NETWORK, PROVIDING SEAMLESS AND SECURE TX'S. USE YOUR FAVORITE WALLET PROVIDER TO HODL ORCA MONSTA TODAY!",
              icon: (
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )
            },
            {
              title: "TECHNOLOGY",
              description: "BUILT ON SOLANA'S CUTTING-EDGE BLOCKCHAIN, FEATURING AUTOMATED SMART CONTRACTS, ADVANCED TOKENOMICS AND OUR OWN REVOLUTIONARY, NEVER BEFORE SEEN TECHNOLOGY.",
              icon: (
                <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )
            }
          ].map((card, index) => (
            <div
              key={index}
              className={`absolute left-1/2 -translate-x-1/2 w-[300px] transform-style-3d`}
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(280px)`
              }}
            >
              <div className="backdrop-blur-md bg-black/30 rounded-xl p-6 border border-gray-800/50 
                shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
                h-[340px] transform transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-shrink-0">
                      {card.icon}
                    </div>
                    <h3 className={`${cornerstone.className} text-3xl font-bold text-green-400`}>
                      {card.title}
                    </h3>
                  </div>
                  <p className={`${cornerstone.className} text-lg text-gray-300 leading-relaxed`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DEXScreener Chart */}
      <div className="absolute bottom-20 left-20 w-[800px] group">
        <div className="relative bg-black/30 rounded-2xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transition-all duration-300 transform hover:scale-105
          overflow-hidden">
          {/* Animated corner effects */}
          <div className="absolute top-0 left-0 w-32 h-32">
            <div className="absolute w-full h-full animate-pulse">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-32 h-32">
            <div className="absolute w-full h-full animate-pulse">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-green-500/50 to-transparent"></div>
              <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-green-500/50 to-transparent"></div>
            </div>
          </div>
          
          {/* Chart title */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-cyan-300">Live Chart</h2>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-base">
              Live 🟢
            </span>
          </div>
          
          {/* DEXScreener iframe */}
          <div id="dexscreener-embed" className="rounded-xl overflow-hidden">
            <iframe 
              src="https://dexscreener.com/solana/6wSRYHNg1C7T9S5cSqXCijxmiVBMu8P8dMH9ckUhEW2A?embed=1&theme=dark"
              className="w-full h-[500px] border-0"
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-10 right-10 flex gap-6">
        <a 
          href="https://dexscreener.com/solana/CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-green-400 transition-colors duration-300 flex items-center gap-2"
        >
          <div className="w-5 h-5 relative">
            <Image
              src="/dexscreener.png"
              alt="DexScreener"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span>DexScreener</span>
        </a>
        <a 
          href="https://x.com/OrcaMonsta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a>
        <a 
          href="https://t.me/orca_monsta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2"
        >
          <svg 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.411-.168.56-.505 1.287-.832 1.287-.319 0-.607-.297-.866-.53-.484-.434-2.747-1.791-3.267-2.151-.52-.36-1.013-.538-.505-1.287.507-.749 2.306-2.156 3.267-3.079.292-.28.558-.792-.053-.792s-2.179 1.372-3.267 2.151c-1.088.779-2.036.805-2.906.531-.87-.274-1.665-.531-1.665-.531s-.585-.234-.319-.766c.266-.532 1.665-1.287 1.665-1.287s2.473-1.019 4.239-1.688c1.766-.669 3.452-.938 3.825-.938.373 0 1.114.134.93.851z"/>
          </svg>
          Telegram
        </a>
      </div>
    </main>
  )
}