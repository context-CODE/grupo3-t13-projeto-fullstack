import { Request, Response } from "express";
import createAdvertisementService from "../../services/advertisements/createAdvertisement.service";

const createAdvertisementController = async (req: Request, res: Response) => {
  const userId = req.user.id
  const newAdvertisement = await createAdvertisementService(userId, req.body);
  return res.status(201).send(newAdvertisement);
};

export default createAdvertisementController;
