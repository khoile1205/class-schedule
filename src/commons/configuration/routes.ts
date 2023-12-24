import { Role } from "../enums/role.enum";

const routeNames = {
	home: "/home",
	about: "/about",
	contact: "/contact",
	login: "/login",
	dashboard: "/dashboard",
	notFound: "/404",
	error: "/500",
	admin: "/admin",
	teacher: "/teacher",
	student: "/student",
};

export const routeConfig: { [key: string]: { [key: string]: string } } = {
	[Role.Student]: {
		default: routeNames.student,
	},
	[Role.Teacher]: {
		default: routeNames.teacher,
	},
	[Role.Admin]: {
		default: routeNames.admin,
	},
};

export const rolesBaseAccess: Role[] = [Role.Admin, Role.Teacher, Role.Student];

export const globalRoutes = ["/error"];
