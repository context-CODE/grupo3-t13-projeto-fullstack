import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import ensureAuthMiddleware from "../middlewares/authentication/ensureAuth.middleware";
import ensureIsAdvertiser from "../middlewares/authorization/ensureIsAdvertiser.middleware";
import resetPasswordSendMailController from "../controllers/users/resetPasswordSendMail.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import {
  userReqSendMailResetPassword,
  userReqResetPassword,
} from "../schemas/users.schema";
import resetPasswordController from "../controllers/users/resetPassword.controller";

const usersRoutes = Router();

usersRoutes.post("", createUserController);
usersRoutes.post(
  "/resetPassword",
  ensureIsValidDataMiddleware(userReqSendMailResetPassword),
  resetPasswordSendMailController
);
usersRoutes.post(
  "/resetPassword/:reset_token",
  ensureIsValidDataMiddleware(userReqResetPassword),
  resetPasswordController
);

usersRoutes.get(
  "/profile",
  ensureAuthMiddleware,
  ensureIsAdvertiser,
  retrieveUserController
);

export default usersRoutes;
