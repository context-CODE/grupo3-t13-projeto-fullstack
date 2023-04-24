import { Request, Response } from "express";
import retrieveUserService from "../../services/users/retrieveUser.service";

const retrieveUserController = async (req: Request, res: Response) => {
    const id = req.user.id
    const retrievedUser = await retrieveUserService(id)

    return res.send(retrievedUser)
}

export default retrieveUserController