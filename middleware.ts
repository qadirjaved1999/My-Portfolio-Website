// middleware.ts (at project root, same level as package.json)
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(_req: NextRequest) {
  // no-op for now; just proves middleware loads correctly
  return NextResponse.next();
}

// Later, when you want to protect admin routes, uncomment this:
// export const config = { matcher: ["/admin/:path*"] };
