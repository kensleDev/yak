import { map } from "rxjs/operators";
import { firstToUpper, reverse, convertCase } from "@app/operators";

export const firstToUpper$ = () => map((data: string) => firstToUpper(data));

export const reverseStr$ = () => map((data: string) => reverse(data));

export const convertCase$ = (caseFrom, caseTo) =>
  map((data: string) => convertCase(caseFrom, caseTo)(data));
