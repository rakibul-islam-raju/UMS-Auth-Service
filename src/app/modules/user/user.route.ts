import express from "express";
import { userController } from "./user.controller";
import { userSchema } from "./user.schema";
import validateRequest from "../../../middlewares/validateRequest";

const router = express.Router();

router.post(
  "/create-user",
  validateRequest(userSchema.userCreateValidationSchema),
  userController.createUser
);

export const userRoutes = router;
