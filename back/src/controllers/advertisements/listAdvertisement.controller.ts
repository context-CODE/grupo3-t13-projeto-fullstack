import { Request, Response } from "express";
import listAdvertisementService from "../../services/advertisements/listAdvertisement.service";

const listAdvertisementsController = async (req: Request, res: Response) => {
  const pagination = req.pagination;
  const listAdvertisements = await listAdvertisementService(pagination);
  return res.status(200).send(listAdvertisements);
};

export default listAdvertisementsController;
