export type Case = "normal" | "camel" | "pascal" | "snake" | "kebab" | "scream";

export interface _TextUtilsService {
  firstToUpper: (input: string) => string;
  convertCase: (input: string, caseFrom: Case, caseTo: Case) => string;
}

export interface _CaseConverter {
  convert: (input: string, caseFrom: Case, caseTo: Case) => string;
}

export interface CaseConverterErrors {
  caseNotRecognised: (isFromCase: boolean) => Error;
}
