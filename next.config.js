/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-win32-x64-msvc',
        'node_modules/@next/swc-win32-x64-msvc'
      ]
    }
  }
}

module.exports = withBundleAnalyzer(nextConfig)
