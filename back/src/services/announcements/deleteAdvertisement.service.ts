import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import AppError from "../../errors/AppError";

const deleteAdvertisementService = async (params_id: string) => {
  const advertisementRepository = AppDataSource.getRepository(Advertisement);
  const findAdvertisement = await advertisementRepository.findOneBy({
    id: params_id,
  });

  if (!findAdvertisement) {
    throw new AppError("This advertisement does't exist", 404);
  }

  await advertisementRepository.remove(findAdvertisement);
  return { message: "Contact sucessfully deleted!" };
};
export default deleteAdvertisementService;
