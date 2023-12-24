import { RBACRoute } from "@/HOCS/withRBAC.routes";
import { Role } from "@/commons/enums/role.enum";
import { Sidebar } from "@/section";
import React from "react";

export default function Page() {
	return <div>{Role.Student}</div>;
}
