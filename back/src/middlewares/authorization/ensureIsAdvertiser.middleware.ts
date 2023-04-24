import { Request, Response, NextFunction } from "express";

const ensureIsAdvertiser = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user.isAdvertiser) {
        console.log(req.user)
        return res.status(401).json({
            message: "User is not advertiser!"
        })
    }
    return next();
};

export default ensureIsAdvertiser;