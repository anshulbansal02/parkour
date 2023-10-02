import { z } from "zod";

export const dbConfigSchema = z.object({
  host: z.string(),
  port: z.number().gt(0).lte(65535),
  username: z.string(),
  password: z.string(),
  databaseName: z.string(),
});

export type DbConfig = z.infer<typeof dbConfigSchema>;
