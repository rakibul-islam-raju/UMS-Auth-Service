import statusCode from "http-status";
import ApiError from "../../../errors/ApiError";
import {
  academicSemisterSearchableFields,
  academicSemisterTitleCodeMapper,
} from "./academicSemister.constants";
import {
  IAcademicSemister,
  IAcademicSemisterFilters,
} from "./academicSemister.interface";
import { AcademicSemister } from "./academicSemister.model";
import { IGenericResponse } from "../../../interfaces/common";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { calculatePagination } from "../../../utils/paginationUtils";
import { SortOrder } from "mongoose";

const createAcademinSemister = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  if (academicSemisterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(statusCode.BAD_REQUEST, "Invalid semister code.");
  }

  const result = await AcademicSemister.create(payload);
  return result;
};

const getAllAcademinSemisters = async (
  paginationOptions: IPaginationOptions,
  filters: IAcademicSemisterFilters
): Promise<IGenericResponse<IAcademicSemister[]>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);
  const { searchTerm, ...filterFields } = filters;

  const andConditions = [];

  // search operation
  if (searchTerm) {
    andConditions.push({
      $or: academicSemisterSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          options: "i",
        },
      })),
    });
  }

  // filter operation
  if (Object.keys(filterFields).length) {
    andConditions.push({
      $and: Object.entries(filterFields).map(([key, value]) => ({
        [key]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AcademicSemister.find(whereCondition)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await AcademicSemister.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleAcademicSemister = async (
  id: string
): Promise<IAcademicSemister | null> => {
  const result = await AcademicSemister.findById(id);
  return result;
};

const updateAcademicSemester = async (
  id: string,
  payload: Partial<IAcademicSemister>
): Promise<IAcademicSemister | null> => {
  if (
    payload.title &&
    payload.code &&
    academicSemisterTitleCodeMapper[payload.title] !== payload.code
  ) {
    throw new ApiError(statusCode.BAD_REQUEST, "Invalid Semester Code");
  }

  const result = await AcademicSemister.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteAcademicSemester = async (
  id: string
): Promise<IAcademicSemister | null> => {
  const result = await AcademicSemister.findByIdAndDelete(id);
  return result;
};

export const academicSemisterService = {
  createAcademinSemister,
  getAllAcademinSemisters,
  getSingleAcademicSemister,
  updateAcademicSemester,
  deleteAcademicSemester,
};
