import { type Repository } from "typeorm";

import { Singleton } from "@utils/decorators";
import { User } from "../model";

@Singleton
class UserService {
  userRepo: Repository<User>;

  public init(userRepo: Repository<User>) {
    this.userRepo = userRepo;
  }

  async createUser(userData: User) {
    const user = new User();

    Object.assign(user, userData);

    return await this.userRepo.save(user);
  }

  async getUserById(userId: number) {
    const user = await this.userRepo.findOne({
      where: { id: userId },
    });

    return user;
  }
}

const userService = new UserService();

export default userService;
