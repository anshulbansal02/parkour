export type UserServiceErrorType = "EMAIL_ALREADY_EXISTS" | "UNKNOWN";

export class UserServiceError extends Error {
  constructor(public readonly type: UserServiceErrorType) {
    super();
  }
}
