import { Router } from "express";
import createAdvertisementController from "../controllers/announcements/createClient.controller.ts";

const advertisementRouter = Router();

advertisementRouter.post("", createAdvertisementController);

export default advertisementRouter