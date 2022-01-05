import express from "express";
import cardController from "../app/controllers/cardController.js";

const cardRouter = express.Router();

cardRouter.use('/:slug', cardController.showCard);
cardRouter.use('/', cardController.card);

export default cardRouter;