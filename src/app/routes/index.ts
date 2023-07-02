import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { academicSemisterRoutes } from "../modules/academicSemister/academicSemister.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.route";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/academic-semisters", academicSemisterRoutes);
router.use("/academic-faculties", AcademicFacultyRoutes);
router.use("/academic-departments", AcademicDepartmentRoutes);

export default router;
