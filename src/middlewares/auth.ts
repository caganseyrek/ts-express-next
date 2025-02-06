import { NextFunction, Request, Response } from "express";

import { UnauthorizedError } from "@/app/errors/errors";

class Auth {
  public static check(_req: Request, _res: Response, next: NextFunction): void {
    try {
      // check for auth here
      next();
    } catch {
      next(new UnauthorizedError());
    }
  }
}

export default Auth;
