import { error } from "console";
import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import {
  iAdvertisementEntity,
  iAdvertisementReqUpdate,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";
import AppError from "../../errors/AppError";

const updateAdvertisementService = async (
  data: iAdvertisementReqUpdate,
  paramsId: string
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const findAdvertisement = await advertisementRepository.findOne({
    where: {
      id: paramsId
    }, relations: {
      user: true
    }
  });
 
  if (!findAdvertisement){
    throw new AppError("This advertisement doesn't exist")
  }

  const updatedAdvertisement: Advertisement = await advertisementRepository.save({
    ...findAdvertisement,
    ...data,
  });

  const validatedAdvertisement = advertisementResSchema.parse(updatedAdvertisement);

  return validatedAdvertisement as iAdvertisementRes;
};
export default updateAdvertisementService;
