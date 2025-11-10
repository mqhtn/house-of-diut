import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const handler = {
  GET: async (request: NextRequest) => {
    const pathname = request.nextUrl.pathname

    // If pathname is the root (/)
    if (pathname === '/') {
      // Redirect to /de (or your default locale)
      return NextResponse.redirect(new URL('/de', request.url))
    }

    // Continue normal route handling for all other paths
    return NextResponse.next()
  }
}

export const config = {
  matcher: '/',
}