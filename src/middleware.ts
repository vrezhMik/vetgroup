import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("test");

  const jwt = req.cookies.get("jwt");

  if (
    req.nextUrl.pathname.startsWith("/_next/") ||
    req.nextUrl.pathname.startsWith("/static/") ||
    req.nextUrl.pathname.startsWith("/api/") ||
    /\.(.*)$/.test(req.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  if (!jwt) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
