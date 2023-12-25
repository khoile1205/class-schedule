"use client";

import { rolesBaseAccess, routeConfig } from "@/commons/configuration/routes";
import { Role } from "@/commons/enums/role.enum";
import { useLoadingStore } from "@/lib/zustand/loading.store";
import { useUserStore } from "@/lib/zustand/user.store";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

interface RBACRouteProps {
	children: React.ReactNode;
	allowedRole: Role;
	// isLoginRoute?: boolean;
}

export const RBACRoute: React.FC<RBACRouteProps> = ({
	children,
	allowedRole,
	// isLoginRoute = false,
}) => {
	const router = useRouter();
	const { isLoggedIn, user, logOut } = useUserStore((state) => state);
	const { setLoading } = useLoadingStore((state) => state);

	useEffect(() => {
		setLoading(true);

		const timeOut = setTimeout(() => {
			if (!(isLoggedIn && user?.role == allowedRole)) {
				logOut();
				router.push("/error");
			}
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timeOut);
	}, [user, isLoggedIn, logOut]);

	return <>{isLoggedIn && user?.role == allowedRole && children}</>;
};
