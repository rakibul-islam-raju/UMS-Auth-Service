import { Request, Response } from "express";
import usersService from "./users.service";

const createUser = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    const createdUser = await usersService.createUser(data);

    return res.status(201).json({
      success: true,
      message: "User successfully created",
      data: createdUser,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

export default {
  createUser,
};
