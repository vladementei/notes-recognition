import {Body, Controller, Get, OnUndefined, Param, Post, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {Song} from "../model";
import {AppRoutes} from "../constants";
import {converter} from "../mocks";

class ConverterRoutes {
    public static readonly ID = "id";
}

@Controller()
@UseBefore(removeCors)
// @UseInterceptor((action: Action, content: any) => {
//     return httpContext.get('project');
// })
export class ConverterController {
    @Get(`${AppRoutes.CONVERTER}/:${ConverterRoutes.ID}`)
    getOne(@Param(ConverterRoutes.ID) id: number) {
        return converter;
    }

    @Post(`${AppRoutes.CONVERTER}/:${ConverterRoutes.ID}`)
    @OnUndefined(204)
    postOne(@Param(ConverterRoutes.ID) id: number, @Body() song: Song) {
        console.log(JSON.stringify(song));
        return undefined;
    }
}
