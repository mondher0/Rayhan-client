import axios from "axios";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { baseUrl } from "./utils/constants";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "fr", "ar"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "ar",
});

export async function middleware(request) {
  const token = request.cookies.get("token");
  let isValid = false;
  console.log("this is token", token);
  const tokenValue = token?.value;
  console.log("this is tokenValue", tokenValue);
  console.log(typeof tokenValue);
  console.log(request.nextUrl.pathname);
  const tokenData = {
    type: tokenValue,
  };

  if (tokenValue) {
    try {
      const response = await fetch(`${baseUrl}/token/check`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenValue}`, // Specify the content type as JSON
        },
        body: JSON.stringify(tokenData),
      });
      const data = await response.json();
      if (data.status) {
        isValid = true;
      } else {
        isValid = false;
      }
      console.log("this is response", data);
    } catch (error) {
      console.log(error);
    }
  } else {
    isValid = false;
  }
  if (!isValid && !request.url.includes("/login")) {
    if (
      !request.url.includes("/register") &&
      request.nextUrl.pathname !== "/" &&
      request.nextUrl.pathname !== "/en" &&
      request.nextUrl.pathname !== "/fr"
    ) {
      console.log(request.nextUrl.pathname);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (isValid && request.url.includes("/login")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  if (isValid && request.url.includes("/register")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
  if (
    (isValid && request.nextUrl.pathname === "/") ||
    request.nextUrl.pathname === "/fr" ||
    request.nextUrl.pathname === "/en"
  ) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return intlMiddleware(request);
}
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
