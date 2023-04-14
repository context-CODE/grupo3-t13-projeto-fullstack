import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import { iAdvertisementRes } from "../../interfaces/advertisements.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";

const retrieveAdvertisementService = async (
  id: string
): Promise<iAdvertisementRes> => {
  const advertisementRepository = AppDataSource.getRepository(Advertisement);

  const findAdvertisement = await advertisementRepository.findOneBy({
    id: id,
  });
  const advertisement = advertisementResSchema.parse(findAdvertisement);

  return advertisement as iAdvertisementRes;
};

export default retrieveAdvertisementService;
