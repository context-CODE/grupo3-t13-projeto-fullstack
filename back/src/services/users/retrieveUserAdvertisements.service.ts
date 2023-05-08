import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import { iUserAdvertisements } from "../../interfaces/users.interface";
import { userAdvertisementsResSchema } from "../../schemas/users.schema";

const retrieveUserAdvertisementsService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      advertisements: true,
    },
  });
  console.log(user);
  return user;
  const userAdvertisements = userAdvertisementsResSchema.parse(user);
};

export default retrieveUserAdvertisementsService;
