import {Action, Controller, Get, Param, UseBefore, UseInterceptor} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import httpContext from "express-http-context";

@Controller()
@UseBefore(removeCors)
@UseInterceptor((action: Action, content: any) => {
    return content + httpContext.get('project');
})
export class ConverterController {
    @Get("/converter/:id")
    getOne(@Param("id") id: number) {
        return 'This action returns #' + id;
    }
}
