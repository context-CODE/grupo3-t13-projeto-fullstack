import { Request, Response } from "express";
import { iUserReqUpdate } from "../../interfaces/users.interface";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
    const updateData: iUserReqUpdate = req.body
    const userToUpdate = req.user.id
    const userUpdated = await updateUserService(updateData, userToUpdate)
    return res.send(userUpdated)
}

export default updateUserController