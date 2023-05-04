import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import User from "../../entities/user.entity";
import {
  iAdvertisementEntity,
  iAdvertisementReq,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";
import { iUserEntity } from "../../interfaces/users.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";

const createAdvertisementService = async (
  userId: string,
  newAdvertisementData: iAdvertisementReq
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const userRepository: iUserEntity = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: userId
    }
  })

  const createdAdvertisement: Advertisement =
    advertisementRepository.create({
      ...newAdvertisementData, user: user!
    });

  await advertisementRepository.save(createdAdvertisement);

  const newAdvertisement = advertisementResSchema.parse(createdAdvertisement);

  return newAdvertisement as iAdvertisementRes;
};

export default createAdvertisementService;
