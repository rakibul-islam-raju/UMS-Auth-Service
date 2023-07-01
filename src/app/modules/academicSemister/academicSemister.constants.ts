import {
  IAcademicSemisterCode,
  IAcademicSemisterMonth,
  IAcademicSemisterTitle,
} from "./academicSemister.interface";

export const academicSemisterTitles: IAcademicSemisterTitle[] = [
  "Autumn",
  "Summer",
  "Fall",
];
export const academicSemisterCodes: IAcademicSemisterCode[] = [
  "01",
  "02",
  "03",
];
export const academicSemisterMonths: IAcademicSemisterMonth[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const academicSemisterTitleCodeMapper: { [key: string]: string } = {
  Autumn: "01",
  Summer: "02",
  Fall: "03",
};

export const academicSemisterSearchableFields = ["title", "code"];

export const academicSemisterFilterableFields = [
  "searchTerm",
  "title",
  "year",
  "code",
];
