import { CacheClient } from ".";

export class CacheRepository<T> {
  private client: CacheClient;

  constructor(private readonly namespace: string) {
    this.client = CacheClient.instance;
  }

  private namespacedKey(key: string) {
    return `${this.namespace}:${key}`;
  }

  private serialize(payload: T) {
    return JSON.stringify(payload);
  }

  private deserialize(str: string): T {
    return JSON.parse(str);
  }

  public async set(key: string, value: T) {
    return await this.client.redis.set(
      this.namespacedKey(key),
      this.serialize(value)
    );
  }

  public async get(key: string) {
    const payload = await this.client.redis.get(this.namespacedKey(key));
    if (payload) return this.deserialize(payload);
  }

  public async exists(key: string) {
    return Boolean(await this.client.redis.exists(this.namespacedKey(key)));
  }
}
