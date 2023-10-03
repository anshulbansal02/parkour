import server from "./server";
import { createLogger } from "@lib/logger";
import * as handlers from "@modules/App/handlers";
import { init } from "./init";
import userApi from "@modules/User/api";
import { tokenParser } from "@lib/middlewares";

const log = createLogger("App");

async function bootstrap() {
  log.info("Bootstrapping...");

  await init();

  log.info("Stacking Middlewares");
  server.use(tokenParser);

  log.info("Stacking Route Handlers");
  // Health check
  server.get("/", handlers.healthCheck);
  // APIs
  server.use("/user", userApi);
  // Rest
  server.use(handlers.lost);

  const PORT = process.env.PORT || 80;
  server.listen(PORT, () => {
    log.info(`Application bootstrapped. Ready to receive requests.`);
  });
}

bootstrap();
