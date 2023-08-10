import { CustomError } from "./custom-errors";

export class DatabaseConenctionError extends CustomError {
  statusCode = 500;
  reason = "Error Connecting to database";
  constructor() {
    super("Error connecting database");
    Object.setPrototypeOf(this, DatabaseConenctionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
