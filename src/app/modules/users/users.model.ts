import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface";

type UserMode = Model<IUser, object>;

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = model<IUser, UserMode>("User", userSchema);
