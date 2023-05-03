import { Router } from "express";
import createUserController from "../controllers/users/createUser.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import ensureAuthMiddleware from "../middlewares/authentication/ensureAuth.middleware";
import ensureIsAdvertiser from "../middlewares/authorization/ensureIsAdvertiser.middleware";
import updateUserController from "../controllers/users/updateUser.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import {
  userReqSendMailResetPassword,
  userReqResetPassword,
} from "../schemas/users.schema";
import resetPasswordSendMailController from "../controllers/users/resetPasswordSendMail.controller";
import resetPasswordController from "../controllers/users/resetPassword.controller";

import retrieveUserAdvertisementsController from "../controllers/users/retrieveUserAdvertisements.controller";

import deleteUserController from "../controllers/users/deleteUser.controller";


const usersRoutes = Router();

usersRoutes.post(
    "", 
    createUserController
    );
usersRoutes.patch(
    "/:id", 
    ensureAuthMiddleware, 
    updateUserController
    );
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

usersRoutes.get(
  "/:id/advertisements",
  retrieveUserAdvertisementsController
)

usersRoutes.delete(
  "",
  ensureAuthMiddleware,
  deleteUserController
)

export default usersRoutes;
