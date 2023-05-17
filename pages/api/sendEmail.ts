import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function HandlerSendEmail(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, subject, email, message } = req.body;
  if (!name || !subject || !email || !message)
    return res.status(400).json({ message: "missing data!" });

  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: "miqueasledesmadev@gmail.com",
    subject: `Mensaje Portafolio - ${subject}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al enviar el correo" });
  }

  res.status(200).json({ message: "success" });
}
