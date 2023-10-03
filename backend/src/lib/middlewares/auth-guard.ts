import { TokenFactory } from "@lib/auth";
import { CacheRepository } from "@lib/cache";
import { NextFunction, Request, Response } from "express";

// import { Session } from "../entities/index.js";

// import { tokenBlocklist } from "../services/index.js";

// // Classes
// class Token {
//   constructor(expire, key) {
//     this.key = key;
//     this.expire = expire;
//   }

//   sign(payload) {
//     const exp = Math.floor(Date.now() / 1000) + this.expire;
//     return jwt.sign(
//       {
//         exp,
//         ...payload,
//       },
//       this.key
//     );
//   }

//   verify(token) {
//     try {
//       return jwt.verify(token, this.key);
//     } catch (err) {
//       if (err.name === "TokenExpiredError") {
//         throw new TokenError("The token has expired");
//       } else {
//         throw new TokenError("Invalid token");
//       }
//     }
//   }
// }

// class TokenError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "TokenError";
//   }
// }

// const AccessToken = new Token(60 * 60, process.env.ACCESS_TOKEN_KEY);
// const SessionToken = new Token(
//   60 * 60 * 24 * 180,
//   process.env.SESSION_TOKEN_KEY
// );

// // Middlewares
// function tokenParser(req, res, next) {
//   const authHeader = req.header("Authorization");
//   const token = authHeader?.split(" ")[1];

//   req.token = token;
//   next();
// }

// function authenticate(delegateResponse = false) {
//   return async function (req, res, next) {
//     function handleUnauthorizedResponse(message = "") {
//       if (delegateResponse) {
//         next();
//       } else {
//         res.dispatch.Unauthorized(message);
//       }
//     }

//     // Request doesn't have any token
//     if (!req.token) {
//       handleUnauthorizedResponse(
//         "Provide bearer access token in authorization header"
//       );
//       return;
//     }

//     // Check token blocklist
//     if (await tokenBlocklist.exists(req.token)) {
//       handleUnauthorizedResponse("Invalid access token");
//       return;
//     }

//     try {
//       // Verify token validity
//       const payload = AccessToken.verify(req.token);

//       // // Verify roles associated with token
//       // if (!(payload.role in roles)) {
//       //   handleUnauthorizedResponse();
//       // }

//       // Attach authenticated user to request
//       req.authenticatedUser = payload;

//       next();
//     } catch (err) {
//       if (err.name === "TokenError") handleUnauthorizedResponse(err.message);
//       else next(err);
//     }
//   };
// }

// // Functions
// async function createSession(req, user) {
//   // Create access and session tokens
//   const sessionToken = SessionToken.sign({ userId: user.userId });
//   const accessToken = AccessToken.sign({ userId: user.userId });

//   // Create session in db
//   const clientInfo = Bowser.getParser(req.header("user-agent"));
//   const session = new Session({
//     _id: sessionToken,
//     accessTokens: [accessToken],
//     userId: user.userId,
//     ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress || "",
//     agent: `${clientInfo.getBrowserName()} ${clientInfo.getBrowserVersion()}`,
//     platform: `${clientInfo.getPlatform()} (${clientInfo.getOS()})`,
//     location: "",
//   });
//   await session.save();

//   return {
//     refresh_token: sessionToken,
//     access_token: accessToken,
//     expire: AccessToken.expire,
//   };
// }

// async function renewSession(sessionToken) {
//   const session = await Session.findOne({ _id: sessionToken });

//   if (!session) {
//     throw new TokenError("Invalid session token");
//   }

//   const newSessionToken = SessionToken.sign({ userId: session.userId });
//   session._id = newSessionToken;
//   const renewedSession = new Session(session.toObject());

//   await Session.deleteOne({ _id: sessionToken });
//   await renewedSession.save();

//   return newSessionToken;
// }

// async function revokeSession(sessionToken) {
//   const session = await Session.findOneAndDelete({ _id: sessionToken });
//   await tokenBlocklist.add(...session.accessTokens);
// }

// async function createAccessToken(sessionToken) {
//   // Verify session token
//   const { userId } = SessionToken.verify(sessionToken);

//   // Check if session token exists
//   const session = await Session.findOne({ _id: sessionToken });
//   if (!session) {
//     throw new TokenError("Invalid refresh token");
//   }

//   let { accessTokens } = session;
//   const lastToken = accessTokens.pop();

//   // create and add new access token to session if last access token is more than 30 minutes old else return same
//   if (jwt.decode(lastToken).exp - Math.floor(+new Date() / 1000) >= 1800) {
//     return lastToken;
//   } else {
//     const accessToken = AccessToken.sign({ userId });
//     session.accessTokens = [lastToken, accessToken];
//     await session.save();
//     return accessToken;
//   }
// }

// module.exports = {
//   tokenParser,
//   authenticate,
//   createSession,
//   renewSession,
//   revokeSession,
//   createAccessToken,
// };

declare global {
  namespace Express {
    interface Request {
      token: string | undefined;
      auth?: AccessToken;
    }
  }
}

// Middlewares
export function tokenParser(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  req.token = token;
  next();
}

interface AccessToken {
  userId: string;
}

const AccessTokenFactory = new TokenFactory<AccessToken>("mysecre2t");

const tokenBlocklist = new CacheRepository<string>(
  "auth:access_token:blocklist"
);

interface AuthGuardOptions {
  delegateResponse: boolean;
}

function AuthGuard(opts: AuthGuardOptions) {
  return async function (req: Request, res: Response, next: NextFunction) {
    function handleUnauthorizedResponse(message = "") {
      if (opts.delegateResponse) {
        next();
      } else {
        res.dispatch.Unauthorized(message);
      }
    }

    // Request doesn't have any token
    if (!req.token) {
      handleUnauthorizedResponse(
        "Provide bearer access token in authorization header"
      );
      return;
    }

    // Check token blocklist
    if (await tokenBlocklist.exists(req.token)) {
      handleUnauthorizedResponse("Invalid access token");
      return;
    }

    try {
      // Verify token validity
      const payload = await AccessTokenFactory.verifyAndDecode(req.token);

      // // Verify roles associated with token
      // if (!(payload.role in roles)) {
      //   handleUnauthorizedResponse();
      // }

      // Attach authenticated user to request
      req.auth = payload;

      next();
    } catch (err) {
      if (err instanceof Error) {
        if (err.name === "TokenError") handleUnauthorizedResponse(err.message);
      } else next(err);
    }
  };
}
