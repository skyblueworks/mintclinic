import { NextRequest, NextResponse } from "next/server";

const locales = ["bg", "en"];
const defaultLocale = "bg";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is missing a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return;
  }

  // Redirect to default locale if no locale is present
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|studio).*)",
  ],
};
