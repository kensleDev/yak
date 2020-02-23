"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CaseConverter {
    constructor() {
        // public uppercaseRegex = (/([A-Z])/g, ",$1");
        this.errors = {
            caseNotRecognised: (isFromCase) => Error(`Case ${isFromCase ? "from" : "to"} not recognised. Acceptable cases are: 
      normal  => normal case
      kebab   => kebab-case
      snake   => snake_case
      scream  => SCREAM_CASE
      camel   => camelCase
      pascal  => PascalCase
    `)
        };
    }
    firstToUpper(input) {
        return input
            .split("")
            .map((letter, index) => {
            return index === 0 ? letter.toUpperCase() : letter;
        })
            .join("");
    }
    convert(input, caseFrom, caseTo) {
        const caseArr = this.splitCaseStringToLower(input, caseFrom);
        const output = this.toCase(caseArr, caseTo);
        return output;
    }
    splitCaseStringToLower(input, caseFrom) {
        const splittable = (input, dilimeter) => input
            .toLowerCase()
            .trim()
            .split(dilimeter);
        const splitOnUpper = (input) => input
            .replace(/([A-Z])/g, ",$1")
            .toLowerCase()
            .split(",");
        // .map(data => {
        //   if (data !== "") return data;
        //   else
        // });
        if (caseFrom === "normal")
            return splittable(input, " ");
        else if (caseFrom === "kebab")
            return splittable(input, "-");
        else if (caseFrom === "snake")
            return splittable(input, "_");
        else if (caseFrom === "scream")
            return splittable(input, "_");
        else if (caseFrom === "camel")
            return splitOnUpper(input);
        else if (caseFrom === "pascal") {
            console.log(splitOnUpper(input));
            return splitOnUpper(input);
        }
        else
            this.errors.caseNotRecognised(true);
        return ["error"];
    }
    toCase(input, caseTo) {
        if (caseTo === "normal")
            return input.join(" ");
        else if (caseTo === "kebab")
            return input.join("-");
        else if (caseTo === "snake")
            return input.join("_");
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
        else
            this.errors.caseNotRecognised(false);
        return "error";
    }
}
exports.CaseConverter = CaseConverter;
//# sourceMappingURL=convertCase.js.map