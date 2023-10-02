import { createLogger } from "@lib/logger";
import { Database } from "@lib/database";
import { Body, User } from "@modules/User/model";
import userService from "@modules/User/service";
import { CacheClient } from "@lib/cache";

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
const { CACHE_HOST, CACHE_PORT, CACHE_USER, CACHE_PASS } = process.env;

const log = createLogger("Init");

async function init() {
  log.info("Initializing Database");

  const database = new Database({
    host: DB_HOST as string,
    port: +(DB_PORT as string),
    username: DB_USER as string,
    password: DB_PASS as string,
    databaseName: DB_NAME as string,
  });

  database.withEntities(User, Body);
  await database.init();

  log.info("Initializing Cache");

  const cacheClient = new CacheClient({
    host: CACHE_HOST as string,
    port: +(CACHE_PORT as string),
    username: CACHE_USER as string,
    password: CACHE_PASS as string,
  });

  await cacheClient.init();

  log.info("Initializing Services");

  const userRepo = database.getRepository<User>(User);
  const bodyRepo = database.getRepository<Body>(Body);

  userService.init(userRepo);
}

export { init };
