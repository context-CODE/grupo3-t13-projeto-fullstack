import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/AppError";

const ensurePaginationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const query = req.query

    let limit = query.limit? Number(query.limit) : 2
    let offset = query.offset? Number(query.offset) : 0

    if (limit < 0 || offset < 0) {
        throw new AppError('Limit/offset cannot be a negative number')
    }

    req.pagination = {
        limit: limit,
        offset: offset
    }

    return next()
}

export default ensurePaginationMiddleware