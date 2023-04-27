import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isAdvertiser: boolean;
      },
      pagination: {
        limit: number,
        offset: number
      };
    }
  }
}
