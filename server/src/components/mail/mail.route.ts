import express from "express";
import sendMail from "./mail.service";

const mailRouter = express.Router();
const availableRequestMethods = ["GET", "POST"];

mailRouter
  .route("/")

  .all((req: any, res: any, next: any) => {
    if (!availableRequestMethods.includes(req.method)) 
      res.status(405).end();
    
    next();
  })

  .get((req: any, res: any, next: any) => {
    console.log("Client has made a GET request.");
    res.send("Request received.");
  })

  .post((req: any, res: any, next: any) => {
    console.log("Client has made a POST request.");
    sendMail(req.body.email, req.body.subject, req.body.content);
    res.send("Request received.");
  });

export default mailRouter;