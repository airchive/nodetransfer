import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import { Request } from "express";
import { Response } from "express";
import { NextFunction } from "express";

import mailRouter from "./components/mail/mail.route";

const app = express();
const port = process.env.PORT || 666

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

app.use("/mail", mailRouter);
app.use(express.static(path.join(__dirname, "../../client/build")));

app.all("*", (req: Request, res: Response, next: NextFunction) => {
    res.send("Server is up and running.");
})

app.listen(port, () => {
    console.log(`Nodetransfer is listening on port ${port}`);
});