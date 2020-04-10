import { CountryCode } from "@app/shared/models";
import { map } from "rxjs/operators";
import { appendCurrency } from "@app/operators";

export const appendCurrency$ = (countryCode: CountryCode) =>
  map((data: string) => appendCurrency(countryCode)(data));
