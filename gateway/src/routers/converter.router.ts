import express from "express";
import * as mocks from "../mocks";

const converterRouter = express.Router();

converterRouter.get("/path", ((req, res) => {
    res.status(200).json(mocks.converter);
}))
export {converterRouter}
