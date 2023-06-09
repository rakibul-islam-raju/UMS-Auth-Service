import { z } from "zod";
import {
  academicSemisterCodes,
  academicSemisterMonths,
  academicSemisterTitles,
} from "./academicSemister.constants";

const academicSemisterCreateValidation = z.object({
  body: z.object({
    title: z.enum([...academicSemisterTitles] as [string, ...string[]], {
      required_error: "Title is required.",
    }),
    year: z.number({ required_error: "Year is required" }),
    code: z.enum([...academicSemisterCodes] as [string, ...string[]], {
      required_error: "Code is required",
    }),
    startMonth: z.enum([...academicSemisterMonths] as [string, ...string[]], {
      required_error: "Start month is required",
    }),
    endMonth: z.enum([...academicSemisterMonths] as [string, ...string[]], {
      required_error: "End month is required",
    }),
  }),
});

const academicSemisterUpdateValidation = z
  .object({
    body: z.object({
      title: z
        .enum([...academicSemisterTitles] as [string, ...string[]], {
          required_error: "Title is required",
        })
        .optional(),
      year: z
        .string({
          required_error: "Year is required ",
        })
        .optional(),
      code: z
        .enum([...academicSemisterCodes] as [string, ...string[]])
        .optional(),
      startMonth: z
        .enum([...academicSemisterMonths] as [string, ...string[]], {
          required_error: "Start month is needed",
        })
        .optional(),
      endMonth: z
        .enum([...academicSemisterMonths] as [string, ...string[]], {
          required_error: "End month is needed",
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.title && data.body.code) ||
      (!data.body.title && !data.body.code),
    {
      message: "Either both title and code should be provided or neither",
    }
  );

export const academicSemisterValidation = {
  academicSemisterCreateValidation,
  academicSemisterUpdateValidation,
};
