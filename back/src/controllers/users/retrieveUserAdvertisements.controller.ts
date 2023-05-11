import { Request, Response } from "express"
import retrieveUserAdvertisementsService from "../../services/users/retrieveUserAdvertisements.service"

const retrieveUserAdvertisementsController = async (req: Request, res: Response) => {
    const paramsId = req.params.id
    const advertisementsFromUser = await retrieveUserAdvertisementsService(paramsId)

    return res.send(advertisementsFromUser)
}

export default retrieveUserAdvertisementsController