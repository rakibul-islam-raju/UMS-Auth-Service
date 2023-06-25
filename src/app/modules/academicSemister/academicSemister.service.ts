import statusCode from "http-status";

import ApiError from "../../../errors/ApiError";
import { academicSemisterTitleCodeMapper } from "./academicSemister.constants";
import { IAcademicSemister } from "./academicSemister.interface";
import { AcademicSemister } from "./academicSemister.model";

const createAcademinSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicSemisterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(statusCode.BAD_REQUEST, "Invalid semister code.");
  }

  const result = await AcademicSemister.create(payload);
  return result;
};

export const academicSemisterService = {
  createAcademinSemister,
};
