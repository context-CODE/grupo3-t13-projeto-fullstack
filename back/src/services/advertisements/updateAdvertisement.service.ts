import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import {
  iAdvertisementEntity,
  iAdvertisementReqUpdate,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";

const updateAdvertisementService = async (
  data: iAdvertisementReqUpdate,
  paramsId: string
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const findAdvertisement = await advertisementRepository.findOneBy({
    id: paramsId,
  });

  const updatedAdvertisement: Advertisement = advertisementRepository.create({
    ...findAdvertisement,
    ...data,
  });
  await advertisementRepository.save(updatedAdvertisement);

  const validatedAdvertisement = advertisementResSchema.parse(updatedAdvertisement);

  return validatedAdvertisement as iAdvertisementRes;
};
export default updateAdvertisementService;
