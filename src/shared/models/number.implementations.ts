import { CountryCode } from "./number.models";

export interface _NumberService {
  appendCurrency(input: number | string, countryCode: CountryCode): string;
}
