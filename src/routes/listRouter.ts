import { Router } from "express";
import * as listController from "../controllers/listController.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";

const listRouter = Router();

listRouter.get(
  "/list/:type",
  validateToken,
  listController.mountList
);

export default listRouter;
