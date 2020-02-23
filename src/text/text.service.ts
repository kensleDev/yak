import { CaseConverter } from "./convertCase.class";
import { Case, _TextUtilsService } from "shared/models/text.models";

export class TextUtilsService implements _TextUtilsService {
  public firstToUpper(input: string): string {
    return input
      .split("")
      .map((letter, index) => {
        return index === 0 ? letter.toUpperCase() : letter;
      })
      .join("");
  }

  public convertCase(input: string, caseFrom: Case, caseTo: Case): string {
    const CC = new CaseConverter();
    return CC.convert(input, caseFrom, caseTo);
  }
}
