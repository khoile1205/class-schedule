import { AuthRepository, UserRepository } from "../repository";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";

const authSerivce = new AuthService(new AuthRepository());
const userService = new UserService(new UserRepository());

export { authSerivce, userService };
