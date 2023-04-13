import { Router } from "express";
import createAdvertisementController from "../controllers/advertisements/createAdvertisement.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import {
  advertisementReqSchema,
  advertisementReqUpdateSchema,
} from "../schemas/advertisement.schema";
import updateAdvertisementController from "../controllers/announcements/updateAdvertisement.controller";
import deleteAdvertisementController from "../controllers/announcements/deleteAdvertisement.controller";

const advertisementRouter = Router();

advertisementRouter.post(
  "",
  ensureIsValidDataMiddleware(advertisementReqSchema),
  createAdvertisementController
);
advertisementRouter.patch(
  "/:id",
  ensureIsValidDataMiddleware(advertisementReqUpdateSchema),
  updateAdvertisementController
);
advertisementRouter.delete("/:id", deleteAdvertisementController);

export default advertisementRouter;
