"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../../public/cornerstone.ttf',
  variable: '--font-cornerstone'
})

export default function Contact() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const features = ['BUGS', 'DEVELOPMENT', 'REWARDS', 'OTHER'];
  
  const socialLinks = [
    { 
      name: "TELEGRAM",
      url: "https://t.me/orca_monsta",
      icon: "M12 20l9-9-9-9-9 9 9 9zm0-18L3 11l9 9 9-9-9-9z"
    },
    { 
      name: "TWITTER",
      url: "https://x.com/OrcaMonsta",
      icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
    }
  ];

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = "Orca Monsta Contact Form";
    const body = `
      Hi Orca Monsta team!
      
      Name: ${formData.name}
      
      Interested in: ${selectedFeatures.join(', ')}
      
      Message:
      ${formData.message}
      
      Contact email: ${formData.email}
      
      Looking forward to hearing from you!
    `.trim();

    window.location.href = `mailto:OrcaMonsta@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full 
            bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]
            bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]
            animate-grid-flow" />
        </div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-[128px] animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="opacity-0 animate-[fadeIn_0.8s_ease-in-out_forwards]">
          <h1 className={`${cornerstone.className} text-4xl font-bold text-cyan-400 mb-8 text-center`}>
            CONTACT US
          </h1>

          <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 border border-gray-800/50 
            shadow-[0_0_50px_rgba(0,255,255,0.1)]">
            
            {/* Feature Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature) => (
                <button
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  className={`${cornerstone.className} p-3 rounded-lg border transition-all duration-300
                    ${selectedFeatures.includes(feature)
                      ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(0,255,255,0.2)]'
                      : 'bg-black/30 border-gray-800/50 hover:border-cyan-500/30'
                    }`}
                >
                  {feature}
                </button>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="YOUR NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`${cornerstone.className} w-full bg-black/30 rounded-lg border border-gray-800/50 px-4 py-2
                    focus:outline-none focus:border-cyan-500/50 transition-colors`}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="YOUR EMAIL"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`${cornerstone.className} w-full bg-black/30 rounded-lg border border-gray-800/50 px-4 py-2
                    focus:outline-none focus:border-cyan-500/50 transition-colors`}
                  required
                />
              </div>

              <div>
                <textarea
                  placeholder="YOUR MESSAGE"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${cornerstone.className} w-full bg-black/30 rounded-lg border border-gray-800/50 px-4 py-2
                    focus:outline-none focus:border-cyan-500/50 transition-colors h-32 resize-none`}
                  required
                />
              </div>

              <button
                type="submit"
                className={`${cornerstone.className} w-full bg-gradient-to-r from-cyan-500 to-green-500 text-white py-3 rounded-lg
                  font-bold hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300`}
              >
                SEND MESSAGE
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-8 flex justify-center gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cornerstone.className} text-gray-400 hover:text-cyan-400 transition-colors`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
