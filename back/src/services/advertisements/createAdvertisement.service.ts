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

  const createdAdvertisement = await advertisementRepository
    .createQueryBuilder()
    .insert()
    .into(Advertisement)
    .values(newAdvertisementData)
    .execute();

  const advertisementAfterInsert = await advertisementRepository.findOneBy({
    id: createdAdvertisement.identifiers[0].id,
  });

  const newAdvertisement = advertisementResSchema.parse(
    advertisementAfterInsert
  );

  return newAdvertisement as iAdvertisementRes;
};

export default createAdvertisementService;
