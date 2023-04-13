import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import {
  iAdvertisementEntity,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";
import { advertisementListResSchema } from "../../schemas/advertisement.schema";

const listAdvertisementService = async (): Promise<iAdvertisementRes[]> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);

  const advertisements = await advertisementRepository.find();

  const listAdvertisements = advertisementListResSchema.parse(advertisements);

  return listAdvertisements as iAdvertisementRes[];
};

export default listAdvertisementService;
