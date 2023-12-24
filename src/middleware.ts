import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18nConfig } from "../i18n-config";
import { getCookie, setCookie } from "cookies-next";

function getLocale(request: NextRequest) {
	// Negotiator expects plain object so we need to transform headers
	const negotiatorHeaders: { [key: string]: string } = {};
	request.headers.forEach((value: string, key: string) => (negotiatorHeaders[key] = value));

	// @ts-ignore locales are readonly
	const locales: string[] = i18nConfig.locales;

	// Use negotiator and intl-localematcher to get the best locale
	let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

	const locale = matchLocale(languages, locales, i18nConfig.defaultLocale);

	console.log("set new locale in cookie", locale, "from", languages);
	setCookie("NEXT_LOCALE", locale);
	return locale;
}

export function middleware(request: NextRequest) {
	let redirectLocale: string;

	const pathname: string = request.nextUrl.pathname;

	// Check if there is any supported locale in the pathname
	const pathnameIsMissingLocale: boolean = i18nConfig.locales.every(
		(locale: string) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	// Redirect if there is no locale
	if (!pathnameIsMissingLocale) {
		redirectLocale = pathname.split("/")[1];
		setCookie("NEXT_LOCALE", redirectLocale);
		return;
	}

	if (getCookie("NEXT_LOCALE")) {
		redirectLocale = getCookie("NEXT_LOCALE") as string;
	} else {
		redirectLocale = getLocale(request);
	}

	setCookie("NEXT_LOCALE", redirectLocale);

	return NextResponse.redirect(
		new URL(`/${redirectLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
	);
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
