import { Schema, model } from "mongoose";
import status from "http-status";
import {
  IAcademicSemister,
  AcademicSemisterModel,
} from "./academicSemister.interface";
import {
  academicSemisterCodes,
  academicSemisterMonths,
  academicSemisterTitles,
} from "./academicSemister.constants";
import ApiError from "../../../errors/ApiError";

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: { type: String, required: true, enum: academicSemisterTitles },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: academicSemisterCodes },
    startMonth: { type: String, required: true, enum: academicSemisterMonths },
    endMonth: { type: String, required: true, enum: academicSemisterMonths },
  },
  { timestamps: true }
);

// handle title and year unique togather
academicSemisterSchema.pre("save", async function (next) {
  const existed = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  });

  if (existed)
    throw new ApiError(status.CONFLICT, "Academic semister is already exist!");
  next();
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemisterModel>(
  "AcademicSemister",
  academicSemisterSchema
);
