import { User } from "../model/users.model";
import { UserRepositoryAbstract } from "../repository/user.repository";

abstract class UserServiceAbstract {
	abstract getUserInfo(): Promise<any>;
}

class UserService implements UserServiceAbstract {
	constructor(private readonly _userRepository: UserRepositoryAbstract) {}

	async getUserInfo(): Promise<User> {
		return await this._userRepository.getUserInfo();
	}
}

export { UserService, UserServiceAbstract };
