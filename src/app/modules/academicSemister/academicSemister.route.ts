import express from "express";
import { academicSemisterSchema } from "./academicSemister.validation";
import validateRequest from "../../../middlewares/validateRequest";
import { academicSemisterController } from "./academicSemister.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(academicSemisterSchema.academicSemisterCreateValidation),
  academicSemisterController.createAcademicSemister
);

export const academicSemisterRoutes = router;
