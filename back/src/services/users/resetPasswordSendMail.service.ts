import { randomUUID } from "node:crypto";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { getTemplateMail, sendMail } from "../../utils/sendMail.utils";
import { iUserEntity } from "../../interfaces/users.interface";

const resetPasswordSendMailService = async (
  email: string,
  protocol: string,
  host: string
): Promise<void> => {
  const userRepository:iUserEntity = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({
    email,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const resetToken = randomUUID();

  await userRepository.update(
    {
      email: user.email,
    },
    {
      reset_token: resetToken,
    }
  );

  const templateResetPassword = getTemplateMail(
    user.email,
    user.name,
    protocol,
    host,
    resetToken
  );

  await sendMail(templateResetPassword);
};

export default resetPasswordSendMailService;
