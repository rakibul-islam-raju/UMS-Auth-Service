import { Model } from "mongoose";

export type IAcademicSemisterMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
export type IAcademicSemisterCode = "01" | "02" | "03";

export type IAcademicSemisterTitle = "Autumn" | "Summer" | "Fall";

export type IAcademicSemister = {
  title: IAcademicSemisterTitle;
  year: number;
  code: IAcademicSemisterCode;
  startMonth: IAcademicSemisterMonth;
  endMonth: IAcademicSemisterMonth;
};

export type AcademicSemisterModel = Model<IAcademicSemister>;

export type IAcademicSemisterFilters = {
  searchTerm?: string;
  title?: string;
  year?: string;
  code?: string;
};
