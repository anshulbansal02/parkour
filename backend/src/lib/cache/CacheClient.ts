import { createLogger } from "@lib/logger";
import { RedisClientType, createClient } from "redis";
import { type CacheConfig, cacheConfigSchema } from "./config";

const log = createLogger("Cache");

export class CacheClient {
  private static _instance: CacheClient;
  public client: RedisClientType;
  private config: CacheConfig;

  constructor(config: CacheConfig) {
    if (CacheClient._instance)
      throw new Error(
        "CacheClient is already initialized. Please use [instance] property to use created CacheClient."
      );

    try {
      this.config = cacheConfigSchema.parse(config);
      CacheClient._instance = this;
    } catch (err) {
      log.error("Invalid cache configuration.");
    }
  }

  static get instance() {
    return CacheClient._instance;
  }

  async init() {
    const { host, port, username, password } = this.config;

    this.client = createClient({
      username,
      password,
      socket: { host, port },
    });

    this.client.on("error", () => {
      log.error("Cache Service Error");
    });

    await this.client.connect();

    log.info("Cache Server Connected");
  }
}
