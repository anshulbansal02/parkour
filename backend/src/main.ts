import server from "./server";
import { createLogger } from "@lib/logger";
import * as handlers from "@modules/App/handlers";
import { init } from "./init";
import userApi from "@modules/User/api";

const log = createLogger("App");

async function bootstrap() {
  log.info("Bootstrapping...");

  await init();

  log.info("Stacking Route Handlers");

  // Health check
  server.get("/", handlers.healthCheck);

  // APIs
  server.use("/user", userApi);

  server.use(handlers.lost);

  const PORT = process.env.PORT || 80;
  server.listen(PORT, () => {
    log.info(`Application bootstrapped. Ready to receive requests.`);
  });
}

bootstrap();
