import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3b84f87320ffd3",
    pass: "542a54382aa173",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe PauloBesen <paulo@paulobesen.com",
      to: "Paulo Besen <paulobesen@gmail.com>",
      subject,
      html: body,
    });
  }
}
