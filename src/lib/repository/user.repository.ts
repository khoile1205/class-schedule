import apiService from "@/util/apiService";
import { User } from "../model/users.model";

abstract class UserRepositoryAbstract {
	abstract getUserInfo(): Promise<User>;
}

class UserRepository implements UserRepositoryAbstract {
	async getUserInfo(): Promise<User> {
		const response = await apiService.get("/users/profile");
		try {
			if (response.status !== 200) throw new Error("Error");
		} catch (err) {}

		const user = await response.json();

		return user;
	}
}

export { UserRepository, UserRepositoryAbstract };
