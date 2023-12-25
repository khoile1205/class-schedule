import apiService from "@/util/apiService";
import { User } from "../model/users.model";

abstract class UserRepositoryAbstract {
	abstract getProfileWithToken(): Promise<User | null>;
}

class UserRepository implements UserRepositoryAbstract {
	async getProfileWithToken(): Promise<User | null> {
		try {
			const response = await apiService.get("/users/profile");

			if (response.status !== 200) return null;

			const user = await response.json();

			return user;
		} catch (error) {
			throw new Error();
		}
	}
}

export { UserRepository, UserRepositoryAbstract };
