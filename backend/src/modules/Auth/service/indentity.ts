import { type Repository } from "typeorm";

import { Singleton } from "@utils/decorators";
import Identity from "../model/Identity";

@Singleton
class IdentityService {
  identityRepo: Repository<Identity>;

  public init(identityRepo: Repository<Identity>) {
    this.identityRepo = identityRepo;
  }

  async createIdentity() {
    try {
    } catch (err) {}
  }

  async verify() {}
}

const identityService = new IdentityService();

export default identityService;
