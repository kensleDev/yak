export type Case = "normal" | "camel" | "pascal" | "snake" | "kebab" | "scream";

export interface CaseConverterErrors {
  caseNotRecognised: (isFromCase: boolean) => Error;
}
