import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import { academicSemisterService } from "./academicSemister.service";
import sendResponse from "../../../utils/sendResponse";
import statusCode from "http-status";

const createAcademicSemister = catchAsync(
  async (req: Request, res: Response) => {
    const academincSemisterData = req.body;

    const result = await academicSemisterService.createAcademinSemister(
      academincSemisterData
    );

    sendResponse(res, {
      statusCode: statusCode.CREATED,
      success: true,
      message: "Academic semister is created successfully.",
      data: result,
    });
  }
);

export const academicSemisterController = {
  createAcademicSemister,
};
