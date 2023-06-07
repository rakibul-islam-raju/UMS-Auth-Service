import config from "../../../config";
import { IUser } from "./users.interface";
import { User } from "./users.model";
import { generateNextUserId } from "./users.utils";

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

export default {
  findLastUser,
  createUser,
};
