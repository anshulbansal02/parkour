import { type Repository } from "typeorm";

import { Singleton } from "@utils/decorators";
import { User } from "../model";
import { UserServiceError } from "../shared/errors";

@Singleton
class UserService {
  userRepo: Repository<User>;

  public init(userRepo: Repository<User>) {
    this.userRepo = userRepo;
  }

  async createUser(userData: User) {
    try {
      const draftUser = Object.assign(new User(), userData);
      const user = await this.userRepo.save(draftUser);

      // email verification

      return user;
    } catch (err) {
      throw new UserServiceError("EMAIL_ALREADY_EXISTS");
    }
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
