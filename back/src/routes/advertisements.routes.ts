import { Router } from "express";
import createAdvertisementController from "../controllers/advertisements/createAdvertisements.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import { advertisementReqSchema } from "../schemas/advertisement.schema";

const advertisementRouter = Router();

advertisementRouter.post(
  "",
  ensureIsValidDataMiddleware(advertisementReqSchema),
  createAdvertisementController
);

export default advertisementRouter;
