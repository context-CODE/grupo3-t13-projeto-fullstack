import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import ensureAuthMiddleware from "../middlewares/authentication/ensureAuth.middleware";
import ensureIsAdvertiser from "../middlewares/authorization/ensureIsAdvertiser.middleware";
import updateUserController from "../controllers/users/updateUser.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController)
usersRoutes.get("/profile", ensureAuthMiddleware, ensureIsAdvertiser, retrieveUserController)
usersRoutes.patch("/profile", ensureAuthMiddleware, updateUserController)

export default usersRoutes;