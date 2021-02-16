import {Controller, Get, Param} from "routing-controllers"
import "reflect-metadata";

@Controller()
export class ConverterController {
    @Get("/converter/:id")
    getOne(@Param("id") id: number) {
        return 'This action returns #' + id;
    }
}
