import { Request, Response } from "express";
import deleteAdvertisementService from "../../services/announcements/deleteAdvertisement.service.js";

const deleteAdvertisementController = async (req: Request, res: Response) => {
  const params_id: string = req.params.id;
  const deletedAdvertisement = await deleteAdvertisementService(params_id);
  return res.status(201).send(deletedAdvertisement);
};

export default deleteAdvertisementController;
