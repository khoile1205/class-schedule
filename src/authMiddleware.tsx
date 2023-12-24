// authMiddleware.ts

import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "cookies-next";

export function authMiddleware(handler: (req: NextRequest, res: NextResponse) => void) {
	return async (req: NextRequest, res: NextResponse) => {
		const accessToken = getCookie("a_t");
		// const { user } = useUserStore((state) => state);

		// Check if the user is authenticated
		if (!accessToken) {
			console.log("Authentication");
			// Redirect to home/login if not authenticated
			return NextResponse.redirect("/home");
		}

		// Continue to the original handler if authenticated
		return await handler(req, res);
	};
}
