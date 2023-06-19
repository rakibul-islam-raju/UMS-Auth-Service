import { RequestHandler } from "express";
import { userService } from "./user.service";

const createUser: RequestHandler = async (req, res, next) => {
  const data = req.body;

  try {
    const createdUser = await userService.createUser(data);

    return res.status(201).json({
      success: true,
      message: "User successfully created",
      data: createdUser,
    });
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createUser,
};
