import { create } from "zustand";
import { User } from "../model/users.model";
import { authSerivce, userService } from "../service";
import { deleteCookie, hasCookie } from "cookies-next";

type State = {
	isLoggedIn: boolean;
	user: User | null;
};

type Action = {
	updateUser(user: User): void;
	signIn: (username: string, password: string, isRemember: boolean) => Promise<boolean>;
	logOut(): void;
};

export const useUserStore = create<State & Action>((set) => ({
	isLoggedIn: false,
	user: null,
	updateUser(user) {
		set(() => ({ user }));
	},
	async signIn(username, password, isRemember) {
		const token = await authSerivce.signIn(username, password, isRemember);

		const isLoggedIn = !!token;
		set(() => ({ isLoggedIn: isLoggedIn }));

		if (isLoggedIn) {
			const user = await userService.getUserInfo();
			set(() => ({ user }));
		}

		return isLoggedIn;
	},

	logOut() {
		deleteCookie("a_t");
		set(() => ({ isLoggedIn: false, user: null }));
		if (hasCookie("r_t")) {
			deleteCookie("r_t");
		}
	},
}));
