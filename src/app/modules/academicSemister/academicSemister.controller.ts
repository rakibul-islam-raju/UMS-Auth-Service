import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { academicSemisterService } from "./academicSemister.service";
import sendResponse from "../../../utils/sendResponse";
import statusCode from "http-status";
import { IAcademicSemister } from "./academicSemister.interface";
import pick from "../../../utils/pick";
import { paginationFields } from "../../../constants/pagination.constants";
import { academicSemisterFilterableFields } from "./academicSemister.constants";

const createAcademicSemister = catchAsync(
  async (req: Request, res: Response) => {
    const academincSemisterData = req.body;

    const result = await academicSemisterService.createAcademinSemister(
      academincSemisterData
    );

    sendResponse<IAcademicSemister>(res, {
      statusCode: statusCode.CREATED,
      success: true,
      message: "Academic semister is created successfully.",
      data: result,
    });
  }
);

const getAllAcademicSemisters = catchAsync(
  async (req: Request, res: Response) => {
    const paginationOptions = pick(req.query, paginationFields);
    const filters = pick(req.query, academicSemisterFilterableFields);

    const result = await academicSemisterService.getAllAcademinSemisters(
      paginationOptions,
      filters
    );

    sendResponse<IAcademicSemister[]>(res, {
      statusCode: statusCode.OK,
      success: true,
      message: "Academic semisters retrived successfully.",
      meta: result.meta,
      data: result.data,
    });
  }
);

const getAcademicSemisterDetails = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await academicSemisterService.getSingleAcademicSemister(id);

    sendResponse<IAcademicSemister>(res, {
      statusCode: statusCode.OK,
      success: true,
      message: "Academic semister retrived successfully.",
      data: result,
    });
  }
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await academicSemisterService.updateAcademicSemester(
      id,
      updatedData
    );

    sendResponse<IAcademicSemister>(res, {
      statusCode: statusCode.OK,
      success: true,
      message: "Semester updated successfully !",
      data: result,
    });
  }
);

const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await academicSemisterService.deleteAcademicSemester(id);

    sendResponse<IAcademicSemister>(res, {
      statusCode: statusCode.OK,
      success: true,
      message: "Academic Semester deleted successfully !",
      data: result,
    });
  }
);

export const academicSemisterController = {
  createAcademicSemister,
  getAllAcademicSemisters,
  getAcademicSemisterDetails,
  updateAcademicSemester,
  deleteAcademicSemester,
};
