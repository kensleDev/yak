export type Case = "normal" | "camel" | "pascal" | "snake" | "kebab" | "scream";

export class CaseConverter {
  // public uppercaseRegex = (/([A-Z])/g, ",$1");

  private errors = {
    caseNotRecognised: (isFromCase: boolean) =>
      Error(`Case ${
        isFromCase ? "from" : "to"
      } not recognised. Acceptable cases are: 
      normal  => normal case
      kebab   => kebab-case
      snake   => snake_case
      scream  => SCREAM_CASE
      camel   => camelCase
      pascal  => PascalCase
    `)
  };

  public firstToUpper(input: string): string {
    return input
      .split("")
      .map((letter, index) => {
        return index === 0 ? letter.toUpperCase() : letter;
      })
      .join("");
  }

  public convert(input: string, caseFrom: Case, caseTo: Case): string {
    const caseArr = this.splitCaseStringToLower(input, caseFrom);
    const output = this.toCase(caseArr, caseTo);

    return output;
  }

  private splitCaseStringToLower(input: string, caseFrom: Case): string[] {
    const splittable = (input: string, dilimeter: string) =>
      input
        .toLowerCase()
        .trim()
        .split(dilimeter);

    const splitOnUpper = (input: string) => {
      /* remove and reattch first character to avoid empty strings */

      const inputWithoutFirst = input.substring(1);
      const first = input.substring(0, 1);

      const inputArr = inputWithoutFirst
        .replace(/([A-Z])/g, ",$1")
        .toLowerCase()
        .split(",");

      inputArr[0] = first.toLowerCase() + inputArr[0];

      return inputArr;
    };

    if (caseFrom === "normal") return splittable(input, " ");
    else if (caseFrom === "kebab") return splittable(input, "-");
    else if (caseFrom === "snake") return splittable(input, "_");
    else if (caseFrom === "scream") return splittable(input, "_");
    else if (caseFrom === "camel") return splitOnUpper(input);
    else if (caseFrom === "pascal") {
      console.log(splitOnUpper(input));
      return splitOnUpper(input);
    } else this.errors.caseNotRecognised(true);
    return ["error"];
  }

  private toCase(input: string[], caseTo: Case): string {
    if (caseTo === "normal") return input.join(" ");
    else if (caseTo === "kebab") return input.join("-");
    else if (caseTo === "snake") return input.join("_");
    else if (caseTo === "scream")
      return input.map(word => word.toUpperCase()).join("_");
    else if (caseTo === "camel")
      return input
        .map((word, index) => {
          return index > 0 ? this.firstToUpper(word) : word;
        })
        .join("");
    else if (caseTo === "pascal")
      return input
        .map(word => {
          return this.firstToUpper(word);
        })
        .join("");
    else this.errors.caseNotRecognised(false);
    return "error";
  }
}
