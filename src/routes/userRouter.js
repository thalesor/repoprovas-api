import { Router } from "express";
import * as userController from "../controllers/userController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import validateToken from "../middlewares/validateTokenMiddleware.js";
import { userInsertSchema } from "../schemas/userSchemas.js";

const userRouter = Router();

userRouter.post(
  "/users",
  validateSchemaMiddleware(userInsertSchema),
  userController.create
);

userRouter.get(
  "/users",
  validateToken,
  userController.geUserId
);

export default userRouter;
