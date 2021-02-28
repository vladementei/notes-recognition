import {Controller, Get, HttpError, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {AppRoutes} from "../constants";
const fs = require("fs");

class AuthorizationRoutes {
    public static readonly PUBLIC_KEY = "public-key";
}

@Controller()
@UseBefore(removeCors)
export class AuthorizationController {
    @Get(`${AppRoutes.AUTHORIZATION}/${AuthorizationRoutes.PUBLIC_KEY}`)
    getPublicKey() {
        return new Promise((resolve, reject) => {
            fs.readFile("assets/public.key", "utf8", (err: NodeJS.ErrnoException, data: string) => {
                if (err) {
                    reject(new HttpError(400, err.message));
                    return;
                }
                resolve(data);
            });
        });
    }
}
