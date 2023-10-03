import { type NextFunction, type Request, type Response } from "express";

const StatusCodes = {
  OK: { code: 200, name: "OK" },
  Created: { code: 201, name: "Created" },
  Accepted: { code: 202, name: "Accepted" },
  NoContent: { code: 204, name: "No Content" },
  BadRequest: { code: 400, name: "Bad Request" },
  Unauthorized: { code: 401, name: "Unauthorized" },
  Forbidden: { code: 403, name: "Forbidden" },
  NotFound: { code: 404, name: "Not Found" },
  UnprocessableEntity: { code: 422, name: "Unprocessable Entity" },
  TooManyRequests: { code: 429, name: "Too Many Requests" },
  InternalServerError: { code: 500, name: "Internal Server Error" },
} as const;

type IResponseDispatcher = {
  [method in keyof typeof StatusCodes]: (payload?: any) => void;
};

// Extend the Response interface to include the dispatch property
declare global {
  namespace Express {
    interface Response {
      dispatch: IResponseDispatcher;
    }
  }
}

export class ResponseDispatcher {
  constructor(private res: Response) {}

  static middleware(req: Request, res: Response, next: NextFunction) {
    res.dispatch = new ResponseDispatcher(res);
    next();
  }

  private createDispatcher(s: { code: number; name: string }) {
    return (payload?: any) => {
      this.res.status(s.code);

      let responseBody;
      if (typeof payload === "string") responseBody = { message: payload };
      else if (payload === null || payload === undefined)
        responseBody = { message: s.name };
      else responseBody = payload;

      this.res.json(responseBody);
    };
  }

  OK = this.createDispatcher(StatusCodes.OK);
  Created = this.createDispatcher(StatusCodes.Created);
  Accepted = this.createDispatcher(StatusCodes.Accepted);
  NoContent = this.createDispatcher(StatusCodes.NoContent);
  BadRequest = this.createDispatcher(StatusCodes.BadRequest);
  Unauthorized = this.createDispatcher(StatusCodes.Unauthorized);
  Forbidden = this.createDispatcher(StatusCodes.Forbidden);
  NotFound = this.createDispatcher(StatusCodes.NotFound);
  TooManyRequests = this.createDispatcher(StatusCodes.TooManyRequests);
  UnprocessableEntity = this.createDispatcher(StatusCodes.UnprocessableEntity);
  InternalServerError = this.createDispatcher(StatusCodes.InternalServerError);
}
