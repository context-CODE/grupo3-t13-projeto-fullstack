import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/email.interface";
import Mailgen from "mailgen";
import "dotenv/config";

const sendMail = async ({ to, subject, text }: IEmailRequest) => {
  const tranporter = createTransport({
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await tranporter.sendMail({
    from: "",
    to,
    subject,
    html: text,
  });
};

const getTemplateMail = (
  userEmail: string,
  userName: string,
  protocol: string,
  host: string,
  resetToken: string
) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Email para recuperação de senha.",
      link: `${protocol}://${host}`,
    },
  });

  const email = {
    body: {
      name: userName,
      intro: "Email para recuperação de senha.",
      action: {
        instructions: "Clique no botão para resetar sua senha.",
        button: {
          color: "#4529E6",
          text: "Resetar senha",
          link: `${protocol}://${host}/users/resetPassword/${resetToken}`,
        },
      },
    },
  };

  const emailBody = mailGenerator.generate(email);

  const emailTemplate = {
    to: userEmail,
    subject: "Reset password",
    text: emailBody,
  };

  return emailTemplate;
};

export { sendMail, getTemplateMail };
