import apiService from "@/util/apiService";
import { getCookie } from "cookies-next";

abstract class AuthRepositoryAbstract {
	abstract signIn(username: string, password: string): Promise<any>;
	abstract generateAccessToken(): Promise<any>;
}

class AuthRepository implements AuthRepositoryAbstract {
	async generateAccessToken(): Promise<any> {
		const response = await apiService.post(
			"/auth/refresh-access-token",
			undefined,
			getCookie("r_t")
		);

		if (response.status !== 200) return;

		const result = await response.json();

		return result;
	}
	async signIn(username: string, password: string): Promise<any> {
		const response = await apiService.post("/auth/sign-in", {
			username,
			password,
		});

		if (response.status !== 200) return;

		const result = await response.json();

		return result;
	}
}

export { AuthRepository, AuthRepositoryAbstract };
