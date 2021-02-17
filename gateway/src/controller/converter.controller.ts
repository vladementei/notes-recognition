import {Body, Controller, Get, OnUndefined, Param, Post, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {Song} from "../model";

@Controller()
@UseBefore(removeCors)
// @UseInterceptor((action: Action, content: any) => {
//     return httpContext.get('project');
// })
export class ConverterController {
    @Get("/converter/:id")
    getOne(@Param("id") id: number) {
        return 'This action returns #' + id;
    }

    @Post('/converter/:id')
    @OnUndefined(204)
    postOne(@Param('id') id: number, @Body() song: Song) {
        console.log(JSON.stringify(song));
        return undefined;
    }
}
