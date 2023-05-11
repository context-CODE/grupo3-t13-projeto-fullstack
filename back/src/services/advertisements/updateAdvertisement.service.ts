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
      user: true,
      comments: {
        user: true
      },
      imageGallery: {
        advertisement: true
      }
    }
  });
 
  if (!findAdvertisement){
    throw new AppError("This advertisement doesn't exist")
  }

  const updatedAdvertisement = await advertisementRepository.update(paramsId, {
    brand: data.brand? data.brand : findAdvertisement.brand,
    color: data.color? data.color : findAdvertisement.color,
    model: data.model? data.model : findAdvertisement.model,
    fuel: data.fuel? data.fuel : findAdvertisement.fuel,
    price: data.price? data.price : findAdvertisement.price,
    year: data.year? data.year : findAdvertisement.year,
    image: data.image? data. image : findAdvertisement.image,
    kilometers: data.kilometers? data.kilometers : findAdvertisement.kilometers,
    description: data.description? data.description : findAdvertisement.description,
  });

  const validatedAdvertisement = advertisementResSchema.parse(updatedAdvertisement);

  return validatedAdvertisement as iAdvertisementRes;
};
export default updateAdvertisementService;
