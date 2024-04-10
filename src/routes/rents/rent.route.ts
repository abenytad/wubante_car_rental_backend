import { Router } from "express";
import { newRent } from "./rent.controller";
const rentRouter:Router=Router();
rentRouter.post('/',newRent);
export default rentRouter;