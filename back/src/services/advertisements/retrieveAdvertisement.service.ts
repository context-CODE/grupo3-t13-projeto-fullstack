import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import { iAdvertisementEntity, iAdvertisementRes } from "../../interfaces/advertisements.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";

const retrieveAdvertisementService = async (
  id: string
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity = AppDataSource.getRepository(Advertisement);

  const findAdvertisement = await advertisementRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      user: true,
      comments: {
        user: true,
      },
    },
    order: {
      comments: {
        created_at: {
          direction: "asc",
        },
      },
    },
  });

  const advertisement = advertisementResSchema.parse(findAdvertisement);

  return advertisement as iAdvertisementRes;
};

export default retrieveAdvertisementService;
