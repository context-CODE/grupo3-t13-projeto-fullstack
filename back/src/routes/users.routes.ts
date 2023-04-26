import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import ensureAuthMiddleware from "../middlewares/authentication/ensureAuth.middleware";
import ensureIsAdvertiser from "../middlewares/authorization/ensureIsAdvertiser.middleware";
import resetPasswordSendMailController from "../controllers/users/resetPasswordSendMail.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import { userReqResetPasswordSchema } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.post(
  "/resetPassword",
  ensureIsValidDataMiddleware(userReqResetPasswordSchema),
  resetPasswordSendMailController
);
usersRoutes.get(
  "/profile",
  ensureAuthMiddleware,
  ensureIsAdvertiser,
  retrieveUserController
);

export default usersRoutes;
