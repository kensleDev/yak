import { _NumberService } from "shared/models/number.implementations";
import { Currency, CountryCode } from "shared/models/number.models";

import * as currencyData from "./currency.json";

export class NumberService implements _NumberService {
  appendCurrency(input: number | string, countryCode: CountryCode): string {
    // get country information

    const currencies: Currency[] = currencyData;

    const currencySymbol = currencies
      .filter(currency => currency.abbreviation === countryCode)
      .map(currency => currency.symbol)[0];

    return currencySymbol + input;
  }
}
