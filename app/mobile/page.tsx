'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import Link from 'next/link'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

const MobilePage = () => {
  const [copied, setCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contractAddress = "CALYAYTQWNYZA8WSZJSFNFUWUVMGKQE0F9HX9";
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const menuItems = [
    { 
      name: "About",
      subItems: [
        { name: "About", href: "/about" },
        { name: "How it works", href: "/how-it-works" },
        { name: "Roadmap", href: "/roadmap" },
        { name: "Whitepaper", href: "/whitepaper" },
        { name: "Team", href: "/team" },
        { name: "Gobbler", href: "/gobbler" },
        { name: "Ecosystem", href: "/ecosystem" }
      ]
    },
    { name: "Candour", href: "/candour" },
    { name: "NFTs", href: "/nfts" },
    { name: "Community", href: "/community" },
    { name: "Announcements", href: "/announcements" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/under-construction" }
  ];

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
        {/* Header/Contract Info with Menu Button */}
        <div className="flex flex-col gap-4">
          {/* Header Info */}
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-4 border border-gray-800/50">
            <div className="flex flex-col gap-2">
              <span className="text-green-400 font-bold">
                <span className="text-[11px]">ORCA MONSTA</span>{' - '}
                <span className="text-[9px]">
                  DEVELOPED BY{' '}
                  <a 
                    href="https://x.com/STACCoverflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-300 transition-colors duration-300"
                  >
                    @STACCOVERFLOW
                  </a>
                </span>
              </span>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-xs">CONTRACT:</span>
                <button onClick={copyToClipboard} className="flex items-center gap-1 group">
                  <span className="font-mono text-[10px] relative group-hover:text-green-400 transition-colors duration-300">
                    {contractAddress}
                    <span className={`absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-xs rounded 
                      transition-all duration-300 ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      Copied!
                    </span>
                  </span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Menu Button and Menu Container */}
          <div className="relative">
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

            {/* Menu Items */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 backdrop-blur-md bg-black/30 rounded-xl border border-gray-800/50 
                overflow-hidden z-50">
                <div className="py-2">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <button
                          className="w-full px-4 py-2 hover:bg-white/10 transition-colors duration-300 relative group flex items-center justify-between"
                          onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            {item.name}
                          </span>
                          <span className={`text-cyan-400 transition-transform duration-300 ${activeSubmenu === item.name ? 'rotate-90' : ''}`}>→</span>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-white/10 transition-colors duration-300 relative group"
                        >
                          <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-green-500/50 
                            scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                          
                          <span className="relative z-10 flex items-center gap-2">
                            {item.name}
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              text-cyan-400">→</span>
                          </span>
                        </Link>
                      )}
                      
                      {/* Submenu Items */}
                      {item.subItems && activeSubmenu === item.name && (
                        <div className="bg-black/20 py-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-6 py-2 hover:bg-white/10 transition-colors duration-300 relative group"
                            >
                              <div className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-b from-cyan-500/50 to-green-500/50 
                                scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                              
                              <span className="relative z-10 flex items-center gap-2">
                                {subItem.name}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                                  text-cyan-400">→</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Banner Image */}
          <div className="relative w-full overflow-hidden">
            <div className="relative w-full h-40 landscape:h-[85vh]">
              <Image
                src="/orcabanner.jpg"
                alt="Orca Banner"
                fill
                className="object-contain portrait:scale-[1.1] landscape:object-cover rounded-xl opacity-60"
                sizes="100vw"
                priority
                style={{
                  objectPosition: 'center center'
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-4">
            <h1 className={`${cornerstone.className} text-xl font-bold text-shadow-lg`}>
              STEP INTO THE TRENCHES AND GET AN EXCLUSIVE LOOK AT THE MAKING OF $ORCA
            </h1>
            <a 
              href="https://dexscreener.com/solana/CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9"
              target="_blank"
              rel="noopener noreferrer"
              className={`${cornerstone.className} text-center border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition-colors backdrop-blur-sm`}
            >
              BUY $ORCA
            </a>
          </div>

          {/* Feature Cards */}
          <div className="flex flex-col gap-4">
            {[
              {
                title: "DEFLATIONARY",
                description: "ORCA MONSTA EMPLOYS STRATEGIC BURN MECHANISMS TO CONSISTENTLY REDUCE THE TOTAL SUPPLY, CREATING SUSTAINABLE PRICE APPRECIATION.",
                icon: (
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "APPRECIATING ASSET",
                description: "ENJOY THE INHERENT APPRECIATION OF ORCA MONSTA AS BURN FUNCTIONS CONTINUALLY REDUCE THE AMOUNTS OF ORCA MONSTA IN CIRCULATION.",
                icon: (
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "EASY",
                description: "BROUGHT TO YOU ON THE SOLANA NETWORK, PROVIDING SEAMLESS AND SECURE TX'S. USE YOUR FAVORITE WALLET PROVIDER TO HODL ORCA MONSTA TODAY!",
                icon: (
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "TECHNOLOGY",
                description: "BUILT ON SOLANA'S CUTTING-EDGE BLOCKCHAIN, FEATURING AUTOMATED SMART CONTRACTS, ADVANCED TOKENOMICS AND OUR OWN REVOLUTIONARY, NEVER BEFORE SEEN TECHNOLOGY.",
                icon: (
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              }
            ].map((card, index) => (
              <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-4 border border-gray-800/50">
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <h3 className={`${cornerstone.className} text-lg font-bold text-green-400`}>
                    {card.title}
                  </h3>
                </div>
                <p className={`${cornerstone.className} text-sm text-gray-300`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Live Chart */}
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-4 border border-gray-800/50">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-cyan-300">Live Chart</h2>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                Live 🟢
              </span>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe 
                src="https://dexscreener.com/solana/6wSRYHNg1C7T9S5cSqXCijxmiVBMu8P8dMH9ckUhEW2A?embed=1&theme=dark"
                className="w-full h-[300px] border-0"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                }}
              ></iframe>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 py-4 px-4">
            {/* Top Row - DexScreener and Twitter */}
            <div className="flex justify-center items-center gap-8">
              <a 
                href="https://dexscreener.com/solana/CaLyryATQhnVZaau425zAJ9fNf4uNWVa1GKD6JN94AX9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group whitespace-nowrap"
              >
                <div className="w-5 h-5 relative flex-shrink-0">
                  <Image
                    src="/dexscreener.png"
                    alt="DexScreener"
                    fill
                    className="object-contain transition-all duration-300 group-hover:brightness-125 group-hover:opacity-100"
                    style={{
                      filter: 'brightness(0.8)',
                      opacity: '0.8'
                    }}
                    priority
                  />
                </div>
                <span>DexScreener</span>
              </a>
              <a 
                href="https://x.com/OrcaMonsta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </a>
            </div>

            {/* Bottom Row - Telegram and Discord */}
            <div className="flex justify-center items-center gap-8">
              <a 
                href="https://t.me/orca_monsta" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.411-.168.56-.505 1.287-.832 1.287-.319 0-.607-.297-.866-.53-.484-.434-2.747-1.791-3.267-2.151-.52-.36-1.013-.538-.505-1.287.507-.749 2.306-2.156 3.267-3.079.292-.28.558-.792-.053-.792s-2.179 1.372-3.267 2.151c-1.088.779-2.036.805-2.906.531-.87-.274-1.665-.531-1.665-.531s-.585-.234-.319-.766c.266-.532 1.665-1.287 1.665-1.287s2.473-1.019 4.239-1.688c1.766-.669 3.452-.938 3.825-.938.373 0 1.114.134.93.851z"/>
                </svg>
                Telegram
              </a>
              <a 
                href="https://discord.com/invite/93CMsHcm" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
                Discord
              </a>
            </div>
          </div>

          {/* Terms and Privacy Links */}
          <div className="flex justify-center gap-4 text-sm mt-4">
            <Link 
              href="/terms"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/privacy"
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 relative group"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobilePage
