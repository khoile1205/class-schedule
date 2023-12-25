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
	getProfileWithToken(): Promise<User | null>;
};

export const useUserStore = create<State & Action>((set) => ({
	isLoggedIn: false,
	user: null,
	updateUser(user: User) {
		set(() => ({ user }));
	},
	async signIn(username, password, isRemember) {
		const token = await authSerivce.signIn(username, password, isRemember);

		const isLoggedIn = !!token;
		set(() => ({ isLoggedIn: isLoggedIn }));

		if (isLoggedIn) {
			const user = await userService.getProfileWithToken();
			set(() => ({ user }));
			// openToast("success", "Login successfully");
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

	async getProfileWithToken() {
		const userData = await userService.getProfileWithToken();

		if (userData) {
			set(() => ({ user: userData, isLoggedIn: true }));
		} else {
			set(() => ({ user: null, isLoggedIn: false }));
		}

		return userData;
	},
}));
