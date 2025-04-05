import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const jwt = req.cookies.get("jwt");

  if (
    req.nextUrl.pathname.startsWith("/_next/") ||
    req.nextUrl.pathname.startsWith("/static/") ||
    req.nextUrl.pathname.startsWith("/api/") ||
    /\.(.*)$/.test(req.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/login") && !jwt) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/login") && jwt) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!jwt) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
