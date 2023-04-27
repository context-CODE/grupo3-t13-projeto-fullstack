import { randomUUID } from "node:crypto";
import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { getTemplateMail, sendMail } from "../../utils/sendMail.utils";

const resetPasswordSendMailService = async (
  email: string,
  protocol: string,
  host: string
): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({
    email,
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const resetToken = randomUUID();

  await userRepo.update(
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
