import jwt from "jsonwebtoken"
import "dotenv/config"
import { NextFunction, Request, Response } from "express"

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            message: 'Token inválido'
        })
    }

    token = token.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET_KEY as string, (error, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: 'Token inválido'
            })
        }
        
        req.user = {
            id: decoded.sub,
            isAdvertiser: decoded.isAdvertiser,
        }

        return next()
    })
}

export default ensureAuthMiddleware