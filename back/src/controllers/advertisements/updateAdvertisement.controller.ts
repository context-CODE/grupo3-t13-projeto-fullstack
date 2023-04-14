import { Request, Response } from "express";
import updateAdvertisementService from "../../services/advertisements/updateAdvertisement.service";



const updateAdvertisementController = async (req: Request, res: Response) => {
  const paramsId: string = req.params.id;
  const updatedAdvertisement = await updateAdvertisementService(
    req.body,
    paramsId
  );
  return res.status(200).send(updatedAdvertisement);
};

export default updateAdvertisementController;
