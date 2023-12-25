import apiService from "@/util/apiService";
import { getCookie } from "cookies-next";

abstract class AuthRepositoryAbstract {
	abstract signIn(username: string, password: string): Promise<any>;
	abstract generateAccessToken(): Promise<any>;
}

class AuthRepository implements AuthRepositoryAbstract {
	async generateAccessToken(): Promise<any> {
		try {
			const response = await apiService.post(
				"/auth/refresh-access-token",
				undefined,
				getCookie("r_t")
			);
			if (response.status !== 200) return null;
			const result = await response.json();

			return result;
		} catch (error: any) {
			throw new Error();
		}
	}
	async signIn(username: string, password: string): Promise<any> {
		try {
			const response = await apiService.post("/auth/sign-in", {
				username,
				password,
			});

			if (response.status !== 200) return null;

			const result = await response.json();

			return result;
		} catch (error: any) {
			throw new Error(error);
		}
	}
}

export { AuthRepository, AuthRepositoryAbstract };
