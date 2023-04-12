import { Router } from "express";
import createAdvertisementController from "../controllers/announcements/createClient.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import { advertisementReqSchema } from "../schemas/advertisement.schema";
import updateAdvertisementController from "../controllers/announcements/updateClient.controller";
import deleteAdvertisementController from "../controllers/announcements/deleteClient.controller";

const advertisementRouter = Router();

advertisementRouter.post(
  "",
  ensureIsValidDataMiddleware(advertisementReqSchema),
  createAdvertisementController
);
advertisementRouter.patch("", updateAdvertisementController);
advertisementRouter.delete("", deleteAdvertisementController);

export default advertisementRouter;
