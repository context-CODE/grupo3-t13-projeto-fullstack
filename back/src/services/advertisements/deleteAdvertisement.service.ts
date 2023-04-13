import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import AppError from "../../errors/AppError";

const deleteAdvertisementService = async (paramsId: string) => {
  const advertisementRepository = AppDataSource.getRepository(Advertisement);
  const findAdvertisement = await advertisementRepository.findOneBy({
    id: paramsId,
  });

  if (!findAdvertisement) {
    throw new AppError("This advertisement does't exist", 404);
  }

  await advertisementRepository.remove(findAdvertisement);
  return { message: "Contact successfully deleted!" };
};
export default deleteAdvertisementService;
