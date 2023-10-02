import { NextFunction, Request, Response } from "express";
import { createLogger } from "@lib/logger";

const log = createLogger("Server");

export function httpLogger(req: Request, res: Response, next: NextFunction) {
  log.http(`${req.method} ${req.url}`);

  next();
}
