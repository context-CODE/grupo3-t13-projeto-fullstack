import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import {
  iAdvertisementEntity,
  iAdvertisementReq,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";

const createAdvertisementService = async (
  newAdvertisementData: iAdvertisementReq
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);

  const createdAdvertisement: Advertisement =
    advertisementRepository.create(newAdvertisementData);

  await advertisementRepository.save(createdAdvertisement);

  const newAdvertisement = advertisementResSchema.parse(createdAdvertisement);

  return newAdvertisement as iAdvertisementRes;
};

export default createAdvertisementService;
