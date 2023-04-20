import { Router } from "express";
import authController from "../controllers/auth/auth.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import { authReqSchema } from "../schemas/auth.schema";

const authRouter = Router();

authRouter.post("", ensureIsValidDataMiddleware(authReqSchema), authController);

export default authRouter;
