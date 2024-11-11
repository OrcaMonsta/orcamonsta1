import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent)

  if (isMobile && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/mobile', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/'
}
