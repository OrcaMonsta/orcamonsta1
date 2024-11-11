import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const cornerstone = localFont({ 
  src: '../public/cornerstone.ttf',
  variable: '--font-cornerstone',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Orca Monsta',
  description: 'Step into the trenches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cornerstone.className}>
      <body>
        <div id="app-root">
          {children}
        </div>
      </body>
    </html>
  )
}