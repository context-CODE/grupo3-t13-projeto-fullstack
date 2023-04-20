import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    console.log(req.body)
    const newUser = await createUserService(req.body);
    return res.status(201).send(newUser);
};

export default createUserController;