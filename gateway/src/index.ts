import dotenv from "dotenv";
import log4js from "log4js";
import bodyParser from "body-parser";
import {Request, Response} from "express-serve-static-core";
import * as appRouters from "./routers"
import {useExpressServer} from 'routing-controllers';
import {ConverterController} from "./controller";
import express, {Express} from "express";
import httpContext from "express-http-context";

class AppRoutes {
    public static readonly ROOT = "/";
    public static readonly CONVERTER = "converter"
}

dotenv.config();
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || "error";

const app: Express = express();
app.use(httpContext.middleware);
useExpressServer(app, {
    controllers: [ConverterController]
});

const port = process.env.PORT || 3000;

// const routers = [
//     {
//         url: AppRoutes.CONVERTER,
//         middleware: appRouters.converterRouter
//     }
// ];

app.use(bodyParser.json())
app.use((req, res, next) => {
    httpContext.ns.bindEmitter(req);
    httpContext.ns.bindEmitter(res);
    next();
});

app.get(AppRoutes.ROOT, (req: Request, res: Response) => res.send('Notes recognition gateway!'));
//routers.forEach(router => app.use(AppRoutes.ROOT + router.url, router.middleware));

app.listen(port, () => {
    logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
