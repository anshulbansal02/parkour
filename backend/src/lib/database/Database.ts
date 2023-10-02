import "reflect-metadata";
import { DataSource, EntitySchema, ObjectLiteral } from "typeorm";

import { createLogger } from "@lib/logger";
import { Singleton } from "@utils/decorators";
import { type DbConfig, dbConfigSchema } from "./config";

const log = createLogger("Database");

@Singleton
export class Database {
  private dataSource: DataSource;
  private config: DbConfig;
  private entities: any;

  constructor(config: DbConfig) {
    try {
      this.config = dbConfigSchema.parse(config);
    } catch (err) {
      log.error("Invalid database configuration.");
    }
  }

  public withEntities(...entities: Array<EntitySchema<any> | Function>) {
    this.entities = entities;
  }

  public async init() {
    const {
      host,
      port,
      username,
      password,
      databaseName: database,
    } = this.config;

    try {
      this.dataSource = new DataSource({
        type: "postgres",
        host,
        port,
        username,
        password,
        database,
        synchronize: true,
        logging: false,
        entities: this.entities,
      });

      await this.dataSource.initialize();
      log.info("Database Connected");
    } catch (error) {
      log.error("Database Connection Failed: ", error);
      process.exit(1);
    }
  }

  getRepository<T extends ObjectLiteral>(entity: any) {
    return this.dataSource.getRepository<T>(entity);
  }
}
