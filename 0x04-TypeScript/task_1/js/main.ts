export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: number]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export default function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
