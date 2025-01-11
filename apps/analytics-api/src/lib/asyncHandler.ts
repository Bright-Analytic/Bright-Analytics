import { NextFunction, Request, Response } from "express";

const asyncHandler =
  (requestHandler: (req: Request, res: Response, next: NextFunction) => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };

export { asyncHandler };
