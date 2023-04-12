import { Request, Response } from "express";
import updateAdvertisementService from "../../services/announcements/updateAdvertisement.service.js";

const updateAdvertisementController = async (req: Request, res: Response) => {
  const params_id: string = req.params.id;
  const updatedAdvertisement = await updateAdvertisementService(
    req.body,
    params_id
  );
  return res.status(201).send(updatedAdvertisement);
};

export default updateAdvertisementController;
