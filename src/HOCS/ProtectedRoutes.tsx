"use client";

import { routeConfig } from "@/commons/configuration/routes";
import { useLoadingStore } from "@/lib/zustand/loading.store";
import { useUserStore } from "@/lib/zustand/user.store";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

interface ProtectedRouteProps {
	children: React.ReactNode;
	isLoginRoute?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
	children,
	isLoginRoute = false,
}) => {
	const router = useRouter();
	const { isLoggedIn, user } = useUserStore((state) => state);
	const { setLoading } = useLoadingStore((state) => state);
	useLayoutEffect(() => {
		setLoading(true);

		setTimeout(() => {
			if (!isLoggedIn && !user) {
				router.push("/login");
			} else if (user) {
				router.replace(`${routeConfig[user!.role].default}`);
			}
			setLoading(false);
		}, 1000);
	}, [router, user, isLoggedIn]);

	return <>{isLoginRoute || (isLoggedIn && !isLoginRoute) ? children : <div></div>}</>;
};
