import {Body, Controller, Get, OnUndefined, Param, Post, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {Song} from "../model";
import {AppRoutes} from "../constants";
import {midi} from "../mocks";

class MIDIRoutes {
    public static readonly ID = "id";
}

@Controller()
@UseBefore(removeCors)
export class MidiController {
    @Get(`${AppRoutes.MIDI}/:${MIDIRoutes.ID}`)
    getOne(@Param(MIDIRoutes.ID) id: number) {
        return midi;
    }

    @Post(`${AppRoutes.MIDI}/:${MIDIRoutes.ID}`)
    @OnUndefined(204)
    postOne(@Param(MIDIRoutes.ID) id: number, @Body() song: Song) {
        console.log(JSON.stringify(song));
        return undefined;
    }
}
