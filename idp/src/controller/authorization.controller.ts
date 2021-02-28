import {Controller, Get, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {AppRoutes} from "../constants";


class AuthorizationRoutes {
    public static readonly PUBLIC_KEY = "public-key";
}

@Controller()
@UseBefore(removeCors)
export class AuthorizationController {
    @Get(`${AppRoutes.AUTHORIZATION}/${AuthorizationRoutes.PUBLIC_KEY}`)
    getPublicKey() {
        return "PUBLIC-KEY";
    }
}
