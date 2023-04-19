import { compare } from "bcryptjs";
import { iAuthReq, iAuthRes } from "../../interfaces/auth.interface";
import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import User from "../../entities/user.entity";
import jwt from "jsonwebtoken";
import "dotenv/config";

const authService = async (payload: iAuthReq): Promise<iAuthRes> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new AppError("Email or password wrong", 401);
  }

  const validatePassword = await compare(payload.password, user.password);

  if (!validatePassword) {
    throw new AppError("Email or password wrong", 401);
  }

  const token = jwt.sign({}, process.env.TOKEN_SECRET_KEY!, {
    expiresIn: "24h",
    subject: user.id,
  });

  return {
    token: token,
  };
};

export default authService;
