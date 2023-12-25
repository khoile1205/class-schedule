import { getCookie, hasCookie } from "cookies-next";
import { User } from "../model/users.model";
import { UserRepositoryAbstract } from "../repository/user.repository";
import { tokenConfig } from "@/commons/configuration/token";
import { AuthRepositoryAbstract } from "../repository";

abstract class UserServiceAbstract {
	abstract getProfileWithToken(): Promise<User | null>;
}

class UserService implements UserServiceAbstract {
	constructor(
		private readonly _userRepository: UserRepositoryAbstract,
		private readonly _authRepository: AuthRepositoryAbstract
	) {}

	async getProfileWithToken(): Promise<User | null> {
		if (!hasCookie(tokenConfig.accessTokenCookieName)) return null;

		const userData = await this._userRepository.getProfileWithToken();

		// if (userData) {
		// 	if (hasCookie(tokenConfig.refreshTokenCookieName)) {
		// 		const refreshToken = getCookie(tokenConfig.accessTokenCookieName);

		// 		const newAccessToken = await this._authRepository.generateAccessToken()

		// 		if (newAccessToken)
		// 	}
		// }
		return userData;
	}
}

export { UserService, UserServiceAbstract };
