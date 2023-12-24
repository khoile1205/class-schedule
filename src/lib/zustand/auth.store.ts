import { create } from "zustand";
import { authSerivce, userService } from "../service";

type State = {};

type Action = {
	generateAccessToken: () => Promise<any>;
};

export const useAuthStore = create<State & Action>((set) => ({
	async generateAccessToken() {
		const token = await authSerivce.generateAccessToken();

		return token;
	},
}));
