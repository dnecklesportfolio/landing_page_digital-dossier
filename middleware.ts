import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const authToken = request.cookies.get('auth_token')?.value
    const { pathname } = request.nextUrl

    // Allow access to login page, static assets, and images
    if (
        pathname.startsWith('/login') ||
        pathname.includes('.') || // Static files (jpg, png, svg, etc)
        pathname.startsWith('/_next')
    ) {
        return NextResponse.next()
    }

    // Redirect to login if not authenticated
    if (!authToken) {
        console.log(`[FORENSIC_GATE] Unauthorized access attempt to: ${pathname}. Redirecting to /login.`);
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
