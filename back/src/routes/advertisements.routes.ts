import { Router } from "express";
import createAdvertisementController from "../controllers/announcements/createClient.controller";
import updateAdvertisementController from "../controllers/announcements/updateClient.controller";
import deleteAdvertisementController from "../controllers/announcements/deleteClient.controller";

const advertisementRouter = Router();

advertisementRouter.post("", createAdvertisementController);
advertisementRouter.patch("", updateAdvertisementController);
advertisementRouter.delete("", deleteAdvertisementController);

export default advertisementRouter;
