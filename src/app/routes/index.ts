import express from "express";
import { userRoutes } from "../modules/user/user.route";
import { academicSemisterRoutes } from "../modules/academicSemister/academicSemister.route";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/academic-semisters", academicSemisterRoutes);

export default router;
