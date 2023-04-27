import { Request, Response } from "express"
import deleteUserService from "../../services/users/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.user.id
    const response = await deleteUserService(userId)

    return res.send(response)
}

export default deleteUserController