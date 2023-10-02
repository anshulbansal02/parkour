import { z } from "zod";

export const cacheConfigSchema = z.object({
  host: z.string(),
  port: z.number().gt(0).lte(65535),
  username: z.string().optional(),
  password: z.string().optional(),
});

export type CacheConfig = z.infer<typeof cacheConfigSchema>;
