import { Role } from "@/commons/enums/role.enum";

export interface User {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	username: string;
	role: Role;
	location: string;
	phoneNumber: string;
	avatar: string;
}
