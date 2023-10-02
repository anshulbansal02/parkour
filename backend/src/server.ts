import helmet from "helmet";
import express from "express";
import bodyParser from "body-parser";

import { httpLogger, ResponseDispatcher } from "@lib/middlewares";

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(httpLogger);
server.use(ResponseDispatcher.middleware);

export default server;
