import { Request, Response } from "express";
import createAdvertisementService from "../../services/announcements/createAdvertisement.service.ts";

const createAdvertisementController = async (req: Request, res: Response) => {
  const newAdvertisement = await createAdvertisementService(req.body);
  return res.status(201).send(newAdvertisement);
};

export default createAdvertisementController;
