import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import ImageGallery from "../../entities/imageGallery.entity";
import User from "../../entities/user.entity";
import {
  iAdvertisementEntity,
  iAdvertisementReq,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";
import { iImageGalleryEntity, iImageGalleryList } from "../../interfaces/imageGallery.interface";
import { iUserEntity } from "../../interfaces/users.interface";
import { advertisementResSchema } from "../../schemas/advertisement.schema";

const createAdvertisementService = async (
  userId: string,
  newAdvertisementData: iAdvertisementReq
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const userRepository: iUserEntity = AppDataSource.getRepository(User);
  const imageGalleryRepository: iImageGalleryEntity = AppDataSource.getRepository(ImageGallery);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  const imageGallery = newAdvertisementData.image_gallery
  console.log(newAdvertisementData)

  const createdAdvertisement: Advertisement = advertisementRepository.create({
    brand: newAdvertisementData.brand,
    color: newAdvertisementData.color,
    model: newAdvertisementData.model,
    fuel: newAdvertisementData.fuel,
    price: newAdvertisementData.price,
    year: newAdvertisementData.year,
    image: newAdvertisementData.image,
    kilometers: newAdvertisementData.kilometers,
    description: newAdvertisementData.description,
    user: user!,
  });

  await advertisementRepository.save(createdAdvertisement);

  if(imageGallery) {
    const newImageGalleryObj: iImageGalleryList = imageGallery.map((image) => imageGalleryRepository.create({image_url: image.image_url, advertisement: createdAdvertisement}))
    await imageGalleryRepository.save(newImageGalleryObj)
  }

  const createdAdvertisementReturn = await advertisementRepository.findOne({
    where: {
      id: createdAdvertisement.id,
    },
    relations: {
      comments: true,
      user: true,
      imageGallery: true
    },
  });

  const newAdvertisement = advertisementResSchema.parse(
    createdAdvertisementReturn
  );

  return newAdvertisement as iAdvertisementRes;
};

export default createAdvertisementService;
