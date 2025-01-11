import { NextFunction, Request, Response } from "express";
import { ApiError } from "./ApiError";

const asyncHandler =
  (requestHandler: (req: Request, res: Response, next: NextFunction) => any) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error: any) => {
      res
        .status(error.statusCode || 500)
        .json(
          new ApiError(
            error.statusCode,
            error.message,
            error.errors,
            error.stack,
          ),
        );
    });
  };

export { asyncHandler };
