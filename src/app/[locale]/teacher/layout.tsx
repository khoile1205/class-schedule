import { RBACRoute } from "@/HOCS/withRBAC.routes";
import { Role } from "@/commons/enums/role.enum";
import { Sidebar } from "@/section";
import React from "react";

export default function DashboardTeacherLayout({ children }: { children: React.ReactNode }) {
	return (
		<RBACRoute allowedRole={Role.Teacher}>
			<Sidebar></Sidebar>
			{children}
		</RBACRoute>
	);
}
