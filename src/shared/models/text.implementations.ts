import { Case } from "./text.models";

export interface _TextUtilsService {
  firstToUpper: (input: string) => string;
  convertCase: (input: string, caseFrom: Case, caseTo: Case) => string;
}

export interface _CaseConverter {
  convert: (input: string, caseFrom: Case, caseTo: Case) => string;
}
