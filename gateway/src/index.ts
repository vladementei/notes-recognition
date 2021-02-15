import express from "express";
import bodyParser from "body-parser";
import {Request, Response, NextFunction} from "express-serve-static-core";
import * as appRouters from "./routers"

const app = express(),
    port = process.env.NODEJS_PORT || 8080,
    root = "/";

const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

const routers = [
    {
        url: "converter",
        middleware: appRouters.converterRouter
    }
];

app.use(allowCrossDomain);
app.use(bodyParser.json())

app.get(root, (req, res) => res.send('Notes recognition gateway!'));
routers.forEach(router => app.use(root + router.url, router.middleware));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
