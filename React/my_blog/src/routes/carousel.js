import express from "express";
import carController from "../app/controllers/carController.js";

const carRouter = express.Router();

carRouter.use('/:slug', carController.showCarousel);
carRouter.use('/', carController.carousel);

export default carRouter;