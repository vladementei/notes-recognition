import {Body, Controller, Post, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {AppRoutes} from "../constants";

class MIDIRoutes {
    public static readonly NOTES = "notes";
}

@Controller()
@UseBefore(removeCors)
export class MidiController {
    @Post(`${AppRoutes.MIDI}/${MIDIRoutes.NOTES}`)
    getNotesFromMidi(@Body() midiFile: any) {
        console.log(midiFile);
        return midiFile.data;
    }
}
