import { Pipe, PipeTransform } from "@angular/core";
import { Case } from "@app/shared/models";
import { convertCase, reverse, firstToUpper } from "@app/operators";

@Pipe({ name: "convertCase" })
export class convertCasePipe implements PipeTransform {
  transform(value: string, caseFrom: Case, caseTo: Case): string {
    return convertCase(caseFrom, caseTo)(value);
  }
}

@Pipe({ name: "reverse" })
export class reversePipe implements PipeTransform {
  transform(value: string): string {
    return reverse(value);
  }
}

@Pipe({ name: "firstToUpper" })
export class firstToUpperPipe implements PipeTransform {
  transform(value: string): string {
    return firstToUpper(value);
  }
}
