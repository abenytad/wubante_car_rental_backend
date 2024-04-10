import { Router } from "express";
import { newCar } from "./car.controller";
const carRouter:Router=Router();
carRouter.post('/',newCar);
export default carRouter;