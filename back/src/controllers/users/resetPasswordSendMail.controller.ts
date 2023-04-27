import { Request, Response } from "express";
import resetPasswordSendMailService from "../../services/users/resetPasswordSendMail.service";

const resetPasswordSendMailController = async (req: Request, res: Response) => {
  await resetPasswordSendMailService(
    req.body.email,
    req.protocol,
    req.get("host")!
  );

  return res.json({ message: "Email successfully sent" });
};

export default resetPasswordSendMailController;
