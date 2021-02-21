import {Controller, Get, HttpError, Param, UseBefore} from "routing-controllers"
import "reflect-metadata";
import {removeCors} from "../middleware";
import {AppRoutes} from "../constants";
// @ts-ignore
import * as midiParser from "midi-parser-js";
import {midiToNotes} from "../services/midi-to-notes.function";

const fs = require("fs");

class MIDIRoutes {
    public static readonly NOTES = "notes";
    public static readonly FILE_NAME = "fileName";
}

@Controller()
@UseBefore(removeCors)
export class MidiController {
    @Get(`${AppRoutes.MIDI}/${MIDIRoutes.NOTES}/:${MIDIRoutes.FILE_NAME}`)
    getNotesFromMidi(@Param(MIDIRoutes.FILE_NAME) fileName: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(`${process.env.FILE_DB_PATH}audio/${fileName}`, 'base64', (err: NodeJS.ErrnoException, data: string) => {
                if (err) {
                    reject(new HttpError(400, err.message));
                    return;
                }
                try {
                    const midiArray = midiParser.parse(data);
                    const newMusic: string = midiToNotes(midiArray);
                    resolve(newMusic);
                } catch (e) {
                    console.error(e);
                    reject(new HttpError(500, e.toString()));
                }
            });
        });
    }
}
