require("dotenv").config();
import nodemailer from "nodemailer";

const sendMail = (email: string, subject: string, content: string) => {
  let transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
  });
  
  let mailOptions = {
    from: process.env.USER,
    to: `${email}`,
    subject: `${subject}`,
    html: `<p>${content}</p>`
  };
  
  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error)
      return console.log(error);
  
    return console.log("Message sent: " + info.messageId);
  });

  return;
}

export default sendMail;