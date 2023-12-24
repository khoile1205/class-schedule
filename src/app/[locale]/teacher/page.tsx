import { RBACRoute } from "@/HOCS/withRBAC.routes";
import { Role } from "@/commons/enums/role.enum";
import React from "react";

export default function Page() {
	return <div>{Role.Teacher}</div>;
}
