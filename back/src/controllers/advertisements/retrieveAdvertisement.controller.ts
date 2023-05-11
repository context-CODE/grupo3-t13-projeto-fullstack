import { Request, Response } from "express";
import retrieveAdvertisementService from "../../services/advertisements/retrieveAdvertisement.service";

const retrieveAdvertisementController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const advertisement = await retrieveAdvertisementService(id);
  return res.status(200).send(advertisement);
};

export default retrieveAdvertisementController;
