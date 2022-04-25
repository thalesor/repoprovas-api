import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import listRouter from "./listRouter.js";

const router = Router();
router.use(userRouter);
router.use(authRouter);
router.use(listRouter);

export default router;
