import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/profile";

  const token = request.cookies.get("token")?.value || "";
  // console.log(token)

  // if (isPublicPath && !token) {
  //   return NextResponse.redirect(new URL("/profile", request.nextUrl));
  // }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/signup", "/profile"],
};
