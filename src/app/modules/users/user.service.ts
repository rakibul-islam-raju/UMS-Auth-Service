import config from "../../../config";
import { IUser } from "./user.interface";
import { User } from "./user.model";
import { generateNextUserId } from "./user.utils";

const findLastUser = async (): Promise<IUser | null> => {
  return await User.findOne({}, {}, { sort: { createdAt: -1 } }).exec();
};

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generateNextUserId();
  const password = config.defaultUserPassword as string;
  console.log(id);
  user.id = String(id);

  if (!user.password) user.password = password;

  const createdUser = await User.create(user);

  if (!createUser) throw new Error("Failed to create user");

  return createdUser;
};

export const userService = {
  findLastUser,
  createUser,
};
