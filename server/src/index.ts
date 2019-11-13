import path from "path";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import mailRouter from "./components/mail/mail.route";

const app = express();

const port = process.env.PORT || 666

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.options("*", cors());

app.use("/mail", mailRouter);

app.use(express.static(path.join(__dirname, "../../client/build")));

app.all("*", (req: any, res: any, next: any) => {
    res.send("Server is up and running.");
})

app.listen(port, () => {
    console.log(`Nodetransfer is listening on port ${port}`);
});