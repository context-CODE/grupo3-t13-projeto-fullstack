import { NextFunction, Request, Response } from "express";
import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";

const ensureIsAdvertisementOwner = async (req: Request, res: Response, next: NextFunction) => {
    const {paramsId} = req.params

    const advertisementRepository = AppDataSource.getRepository(Advertisement)

    const retrievedAdvertisement: Advertisement|null = await advertisementRepository.findOneBy({id: paramsId})

    if (retrievedAdvertisement?.user.id === req.user.id) {
        return next()
    }

    return res.status(401).json({
        message: "You do not have permission to edit an advertisement that is not yours."
    })
}

