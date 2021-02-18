import {Controller, Get, Param, Post, Req, UseBefore} from "routing-controllers"
import "reflect-metadata";
import axios from "axios";
import {removeCors} from "../middleware";
import {AppRoutes} from "../constants";
import {converter} from "../mocks";
import {Request} from 'express';

class ConverterRoutes {
    public static readonly ID = "id";
    public static readonly NOTES = "notes";
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

    // @Post(`${AppRoutes.CONVERTER}/:${ConverterRoutes.ID}`)
    // @OnUndefined(204)
    // postOne(@Param(ConverterRoutes.ID) id: number, @Body() song: Song) {
    //     console.log(JSON.stringify(song));
    //     return undefined;
    // }

    @Post(`${AppRoutes.CONVERTER}/${ConverterRoutes.NOTES}`)
    notesFromMidi(@Req() request: Request) {
        const midiFile = request.files?.file;
        console.log(midiFile);
        return axios.post("http://localhost:8081/midi/notes", midiFile).then(response => response.data);
    }
}
