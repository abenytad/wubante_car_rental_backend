import { Router } from "express";
import { newUser } from "./user.controller";
const userRouter:Router=Router();
userRouter.post('/',newUser);
export default userRouter;
