"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Team() {
  const teamMembers = [
    {
      name: "JARETT DUNN AKA @STACCoverflow",
      role: "FOUNDER, CEO & LEAD DEVELOPER",
      description: "BLOCKCHAIN VETERAN WITH 12+ YEARS OF EXPERIENCE IN DEVELOPMENT AND PROGRAMMING",
      expertise: ["BLOCKCHAIN ARCHITECTURE", "CODE DEVELOPMENT", "PROGRAMMING", "IMPLEMENTATION"],
      image: "/STACC.png"
    },
    {
      name: "KRYPTTOR",
      role: "GENERAL MANAGER & DEVELOPER ",
      description: "OVER 12 YEARS OF EXPERIENCE IN THE CRYPTO SPACE, 6+ YEARS OF EXPERIENCE IN DEVELOPMENT & PROGRAMMING.",
      expertise: ["PROJECT MANAGEMENT", "DEVELOPMENT", "PROGRAMMING", "DESIGN"],
      image: "/krypttorprofile.png"
    },
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
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
              shadow-[0_0_50px_rgba(0,255,255,0.1)] hover:shadow-[0_0_80px_rgba(0,255,255,0.2)]">
              {/* Image Container */}
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Member Name */}
              <h2 className={`${cornerstone.className} text-2xl text-green-400 mb-2`}>
                {member.name}
              </h2>
              
              {/* Role */}
              <h3 className={`${cornerstone.className} text-cyan-400 mb-4`}>
                {member.role}
              </h3>
              
              {/* Description */}
              <p className={`${cornerstone.className} text-gray-300 mb-6`}>
                {member.description}
              </p>
              
              {/* Expertise */}
              <div>
                <h4 className={`${cornerstone.className} text-gray-400 mb-2`}>EXPERTISE</h4>
                <ul className="space-y-2">
                  {member.expertise.map((skill, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className={`${cornerstone.className} text-gray-300`}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Recruitment Disclaimer */}
        <div className="backdrop-blur-md bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/30
          shadow-[0_0_30px_rgba(0,255,255,0.1)] mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
            <h2 className={`${cornerstone.className} text-xl text-cyan-400`}>
              JOIN OUR TEAM
            </h2>
          </div>
          <div className={`${cornerstone.className} text-gray-300 space-y-2`}>
            <p>
              WE ARE ACTIVELY RECRUITING NEW MEMBERS TO JOIN OUR GROWING TEAM. AS WE EXPAND, NEW TEAM MEMBERS 
              WILL BE ANNOUNCED ON OUR <Link href="/announcements" className="text-cyan-400 hover:text-cyan-300 transition-colors">ANNOUNCEMENTS PAGE</Link> AND 
              SOCIAL MEDIA PROFILES.
            </p>
            <p>
              IF YOU'RE INTERESTED IN JOINING THE ORCA MONSTA TEAM, PLEASE REACH OUT THROUGH OUR <Link href="/contact" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors">CONTACT PAGE</Link> OR 
              CONNECT WITH US ON OUR SOCIAL MEDIA PLATFORMS.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
