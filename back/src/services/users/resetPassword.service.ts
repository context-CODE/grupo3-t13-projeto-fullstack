import { hashSync } from "bcryptjs";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import "dotenv/config";

const resetPasswordService = async (
  password: string,
  resetToken: string
): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({
    reset_token: resetToken,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRepo.update(
    {
      reset_token: resetToken,
    },
    {
      password: hashSync(password, process.env.SALT_HASH),
      reset_token: "",
    }
  );
};

export default resetPasswordService;
