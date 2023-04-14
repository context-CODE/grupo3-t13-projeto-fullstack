import { Router } from "express";
import createAdvertisementController from "../controllers/advertisements/createAdvertisement.controller";
import ensureIsValidDataMiddleware from "../middlewares/formHandling/ensureIsValidData.middleware";
import {
  advertisementReqSchema,
  advertisementReqUpdateSchema,
} from "../schemas/advertisement.schema";
import updateAdvertisementController from "../controllers/advertisements/updateAdvertisement.controller";
import deleteAdvertisementController from "../controllers/advertisements/deleteAdvertisement.controller";
import listAdvertisementsController from "../controllers/advertisements/listAdvertisement.controller";
import retrieveAdvertisementController from "../controllers/advertisements/retrieveAdvertisement.controller";

const advertisementRouter = Router();

advertisementRouter.post(
  "",
  ensureIsValidDataMiddleware(advertisementReqSchema),
  createAdvertisementController
);
advertisementRouter.get("", listAdvertisementsController);
advertisementRouter.get("/:id", retrieveAdvertisementController);
advertisementRouter.patch(
  "/:id",
  ensureIsValidDataMiddleware(advertisementReqUpdateSchema),
  updateAdvertisementController
);
advertisementRouter.delete("/:id", deleteAdvertisementController);

export default advertisementRouter;
