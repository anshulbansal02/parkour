import { NextFunction, Request, Response } from "express";

export function lost(req: Request, res: Response, next: NextFunction) {
  res.dispatch.NotFound({
    message: `${req.path} not found.`,
  });
}

export function healthCheck(req: Request, res: Response, next: NextFunction) {
  res.dispatch.OK({ message: "Parkour is up!" });
}
