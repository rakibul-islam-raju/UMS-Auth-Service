import express from "express";
import { academicSemisterValidation } from "./academicSemister.validation";
import validateRequest from "../../../middlewares/validateRequest";
import { academicSemisterController } from "./academicSemister.controller";

const router = express.Router();

router.post(
  "/",
  validateRequest(academicSemisterValidation.academicSemisterCreateValidation),
  academicSemisterController.createAcademicSemister
);
router.get("/", academicSemisterController.getAllAcademicSemisters);
router.get("/:id", academicSemisterController.getAcademicSemisterDetails);
router.patch(
  "/:id",
  validateRequest(academicSemisterValidation.academicSemisterUpdateValidation),
  academicSemisterController.updateAcademicSemester
);
router.delete("/:id", academicSemisterController.deleteAcademicSemester);

export const academicSemisterRoutes = router;
