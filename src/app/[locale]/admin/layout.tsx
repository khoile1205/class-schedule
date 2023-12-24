import { RBACRoute } from "@/HOCS/withRBAC.routes";
import { Role } from "@/commons/enums/role.enum";
import { Sidebar } from "@/section";
import React from "react";

export default function DashboardAdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<RBACRoute allowedRole={Role.Admin}>
			<Sidebar></Sidebar>
			{children}
		</RBACRoute>
	);
}
