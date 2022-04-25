import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware.js";
import { authSchema } from "../schemas/authSchemas.js";

const authRouter = Router();

authRouter.post(
  "/auth",
  validateSchemaMiddleware(authSchema),
  authController.signIn
);

export default authRouter;
