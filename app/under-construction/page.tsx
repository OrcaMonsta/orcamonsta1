'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function UnderConstruction() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "Orca Monsta Updates Request";
    const body = `
      Hi Orca Monsta team!
      
      I'm interested in the following features:
      ${selectedFeatures.join(', ')}
      
      ${selectedFeatures.includes('OTHER') ? `Additional request/message:
      ${message}
      
      ` : ''}
      My email: ${email}
      
      Looking forward to updates!
    `.trim();

    window.location.href = `mailto:support@orcamonsta.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6">
        {/* Animated Construction Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl animate-pulse"></div>
          <svg className="w-24 h-24 text-cyan-400 relative animate-bounce" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>

        {/* Main Title */}
        <h1 className={`${cornerstone.className} text-5xl md:text-6xl font-bold text-center mb-6
          bg-gradient-to-r from-cyan-400 to-green-400 text-transparent bg-clip-text`}>
          UNDER CONSTRUCTION
        </h1>

        {/* Animated Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-green-500 w-3/4
              animate-progress-flow"></div>
          </div>
          <div className="flex justify-between mt-2 text-gray-400 text-sm">
            <span>PROGRESS</span>
            <span>75%</span>
          </div>
        </div>

        {/* Info Container */}
        <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
          shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]
          transform transition-all duration-300 max-w-2xl w-full text-center">
          <p className={`${cornerstone.className} text-xl text-gray-300 mb-6`}>
            WE ARE WORKING HARD TO BRING YOU SOMETHING AMAZING.
            THIS PAGE WILL BE AVAILABLE SOON! 
            PLEASE EMAIL US WITH ANY QUESTIONS OR REQUESTS YOU MAY HAVE.
          </p>
          
          {/* Features Coming Soon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {['NFTS', 'STAKING', 'REWARDS', 'OTHER'].map((feature, index) => (
              <button
                key={index}
                onClick={() => toggleFeature(feature)}
                className={`flex items-center justify-center p-3
                  rounded-lg border transition-all duration-300
                  ${selectedFeatures.includes(feature)
                    ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.2)] animate-pulse'
                    : 'bg-white/5 border-gray-800/50 hover:bg-white/10 hover:border-gray-700/50'
                  }`}
              >
                <span className={`${cornerstone.className} 
                  ${selectedFeatures.includes(feature) ? 'text-cyan-300' : 'text-cyan-400'}`}>
                  {feature}
                </span>
              </button>
            ))}
          </div>

          {/* Notification Form */}
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            {selectedFeatures.includes('OTHER') && (
              <div className="w-full">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Please tell us what features you'd like to see... (max 500 characters)"
                  maxLength={500}
                  className="w-full bg-black/30 rounded-lg border border-gray-800/50 px-4 py-2
                    focus:outline-none focus:border-cyan-500/50 transition-colors resize-none h-32
                    placeholder:text-gray-500"
                  style={{ fontFamily: 'inherit' }}
                />
                <div className="text-right text-sm text-gray-400 mt-1">
                  {500 - message.length} characters remaining
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                className="flex-1 bg-black/30 rounded-lg border border-gray-800/50 px-4 py-2
                  focus:outline-none focus:border-cyan-500/50 transition-colors"
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-green-500/20 
                  border border-cyan-500/50 rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] 
                  active:shadow-[0_0_50px_rgba(0,255,255,0.4)]
                  transition-all duration-300"
              >
                NOTIFY US
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6">
            <a 
              href="https://x.com/OrcaMonsta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              TWITTER
            </a>
            <a 
              href="https://t.me/orca_monsta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              TELEGRAM
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              DISCORD
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}