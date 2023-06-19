import { userService } from "./user.service";

export const generateNextUserId = async (): Promise<string> => {
  const lastUser = await userService.findLastUser();

  let nextId = 1;
  if (lastUser && lastUser.id) {
    const lastId = parseInt(lastUser.id.slice(-2), 10);
    nextId = lastId + 1;
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  const userId = `${year}${month}${day}${nextId.toString().padStart(2, "0")}`;

  return userId;
};
