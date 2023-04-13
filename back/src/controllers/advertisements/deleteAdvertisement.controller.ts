import { Request, Response } from "express";
import deleteAdvertisementService from "../../services/advertisements/deleteAdvertisement.service";



const deleteAdvertisementController = async (req: Request, res: Response) => {
  const params_id: string = req.params.id;
  const deletedAdvertisement = await deleteAdvertisementService(params_id);
  return res.status(204).send(deletedAdvertisement);
};

export default deleteAdvertisementController;
