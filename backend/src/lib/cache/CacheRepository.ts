import { CacheClient } from ".";

export class CacheRepository<T> {
  private client: CacheClient;

  constructor(private readonly namespace: string) {
    this.client = CacheClient.instance;
  }
}
