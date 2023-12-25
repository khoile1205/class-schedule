import { setCookie } from "cookies-next";
import { AuthRepositoryAbstract } from "../repository/auth.repository";

abstract class AuthServiceAbstract {
	abstract signIn(username: string, password: string, isRemember: boolean): Promise<any>;
	abstract generateAccessToken(): Promise<any>;
}

class AuthService implements AuthServiceAbstract {
	constructor(private readonly _authRepository: AuthRepositoryAbstract) {}
	async generateAccessToken(): Promise<any> {
		const token = await this._authRepository.generateAccessToken();

		setCookie("a_t", token.access_token);

		return token;
	}

	async signIn(username: string, password: string, isRemember: boolean): Promise<any> {
		const token = await this._authRepository.signIn(username, password);
		if (token) {
			setCookie("a_t", token.access_token);

			if (isRemember) {
				setCookie("r_t", token.refresh_token);
			}
		}

		return token;
	}
}

export { AuthService, AuthServiceAbstract };
