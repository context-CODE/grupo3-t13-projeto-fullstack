import AppDataSource from "../../data-source";
import Advertisement from "../../entities/advertisement.entity";
import {
  iAdvertisementEntity,
  iAdvertisementReqUpdate,
  iAdvertisementRes,
} from "../../interfaces/advertisements.interface";

const updateAdvertisementService = async (
  data: iAdvertisementReqUpdate,
  params_id: string
): Promise<iAdvertisementRes> => {
  const advertisementRepository: iAdvertisementEntity =
    AppDataSource.getRepository(Advertisement);
  const findAdvertisement = await advertisementRepository.findOneBy({
    id: params_id,
  });

  const updatedAdvertisement: Advertisement = advertisementRepository.create({
    ...findAdvertisement,
    ...data,
  });
  await advertisementRepository.save(updatedAdvertisement);

  return updatedAdvertisement;
};
export default updateAdvertisementService;
