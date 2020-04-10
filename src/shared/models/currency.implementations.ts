import { CountryCode } from "./currency.models";

export interface _NumberService {
  appendCurrency(input: number | string, countryCode: CountryCode): string;
}
