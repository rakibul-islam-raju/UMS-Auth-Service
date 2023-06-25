import { userService } from "./user.service";
import statusCode from "http-status";
import sendResponse from "../../../utils/sendResponse";
import catchAsync from "../../../utils/catchAsync";
import { Request, Response } from "express";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const createdUser = await userService.createUser(data);

  sendResponse(res, {
    statusCode: statusCode.CREATED,
    success: true,
    message: "User successfully created",
    data: createdUser,
  });
});

export const userController = {
  createUser,
};
