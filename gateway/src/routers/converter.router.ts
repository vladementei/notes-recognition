import express from "express";
import * as mocks from "../mocks";

const converterRouter = express.Router();

class ConverterRoutes {
    public static readonly PATH = "/path";
}

converterRouter.get(ConverterRoutes.PATH, ((req, res) => {
    res.status(200).json(mocks.converter);
}))

export {converterRouter, ConverterRoutes}
