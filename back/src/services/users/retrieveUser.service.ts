import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";

const retrieveUserService = async (userId: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      advertisements: true,
    },
  });

  if (!user) {
    throw new AppError("User not found");
  }

  return user;
};

export default retrieveUserService;
