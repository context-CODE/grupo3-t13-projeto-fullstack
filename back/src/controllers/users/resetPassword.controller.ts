import { Request, Response } from "express";
import resetPasswordService from "../../services/users/resetPassword.service";

const resetPasswordController = async (req: Request, res: Response) => {
  await resetPasswordService(req.body.password, req.params.reset_token);

  return res.json({ message: "Successfully updated password" });
};

export default resetPasswordController;
