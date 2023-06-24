import { z } from "zod";

const userCreateValidationSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: "Role is required",
    }),
    password: z.string().min(4).max(20).optional(),
  }),
});

export const userSchema = {
  userCreateValidationSchema,
};
