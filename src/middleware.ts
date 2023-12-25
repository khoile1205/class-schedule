import { NextRequest, NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18nConfig } from "../i18n-config";
import { getCookie, setCookie } from "cookies-next";

function getLocale(request: NextRequest) {
	let locale: string;

	const localeInCookies = request.cookies.get("locale")?.value;
	if (localeInCookies) {
		// Already have locale in cookies
		locale = localeInCookies;
	} else {
		const negotiatorHeaders: { [key: string]: string } = {};
		request.headers.forEach((value: string, key: string) => (negotiatorHeaders[key] = value));

		// @ts-ignore locales are readonly
		const locales: string[] = i18nConfig.locales;

		// Use negotiator and intl-localematcher to get the best locale
		let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

		// Negotiator expects plain object so we need to transform headers
		locale = matchLocale(languages, locales, i18nConfig.defaultLocale);
	}

	return locale;
}

export function middleware(request: NextRequest) {
	const pathname: string = request.nextUrl.pathname;

	// Check if there is any supported locale in the pathname
	const pathnameIsMissingLocale: boolean = i18nConfig.locales.every(
		(locale: string) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	// Redirect if there is no locale
	if (pathnameIsMissingLocale) {
		const locale = getLocale(request);
		return NextResponse.redirect(
			new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)
		);
	}
}

export const config = {
	// Matcher ignoring `/_next/` and `/api/`
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
