import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // If pathname is the root (/)
  if (pathname === '/') {
    // Redirect to /de (or your default locale)
    return NextResponse.redirect(new URL('/de', request.url))
  }
}

export const config = {
  matcher: '/',
}