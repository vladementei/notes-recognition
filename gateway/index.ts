import express from "express";
import bodyParser from "body-parser";
import {Request, Response, NextFunction} from "express-serve-static-core";

const app = express(),
    port = process.env.NODEJS_PORT || 8080,
    root = "/";

const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

app.use(allowCrossDomain);
app.use(bodyParser.json())

app.get(root, (req, res) => res.send('Notes recognition gateway!'));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
