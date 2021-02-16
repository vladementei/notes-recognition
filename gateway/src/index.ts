import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {Request, Response, NextFunction} from "express-serve-static-core";
import * as appRouters from "./routers"

class AppRoutes {
    public static readonly ROOT = "/";
    public static readonly CONVERTER = "converter"
}

dotenv.config();

const app = express(),
    port = process.env.PORT || 3000;

const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
};

const routers = [
    {
        url: AppRoutes.CONVERTER,
        middleware: appRouters.converterRouter
    }
];

app.use(allowCrossDomain);
app.use(bodyParser.json())

app.get(AppRoutes.ROOT, (req, res) => res.send('Notes recognition gateway!'));
routers.forEach(router => app.use(AppRoutes.ROOT + router.url, router.middleware));

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
