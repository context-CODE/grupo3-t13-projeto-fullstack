import { Router } from "express";
<<<<<<< HEAD
import createAdvertisementController from "../controllers/announcements/createAdvertisement.controller";
=======
import createAdvertisementController from "../controllers/advertisements/createAdvertisements.controller";
>>>>>>> 50e175fae3bdfed0dc7ddf0bdcc092f656fb0788
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
