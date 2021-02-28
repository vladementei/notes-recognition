import {Controller, Get, HttpError, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {AppRoutes} from "../constants";
const fs = require("fs");
import * as jwt from "jsonwebtoken";
import {SignOptions} from "jsonwebtoken";

class AuthorizationRoutes {
    public static readonly PUBLIC_KEY = "public-key";
    public static readonly TOKEN = "token";
}

const signOptions: SignOptions = {
    issuer: "Otvinta corp",
    subject: "otvinta@gmail.com",
    audience: "http://localhost",
    expiresIn: "24h",
    algorithm: "RS256"
};

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

    @Get(`${AppRoutes.AUTHORIZATION}/${AuthorizationRoutes.TOKEN}`)
    getToken() {
        return new Promise((resolve, reject) => {
            fs.readFile("assets/private.key", "utf8", (err: NodeJS.ErrnoException, data: string) => {
                if (err) {
                    reject(new HttpError(400, err.message));
                    return;
                }

                const payload = {
                    role: "Anonymous"
                };

                const token = jwt.sign(payload, data, signOptions);
                resolve(token);
            });
        });
    }
}
