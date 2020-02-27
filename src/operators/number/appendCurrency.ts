import { CountryCode, Currency } from "shared/models/number.models";

import { currenciesData } from "../../services/data/json.service";

export const appendCurrency = (
  input: number | string,
  countryCode: CountryCode
) => {
  // get country information

  const currencies: Currency[] = currenciesData;

  const currencySymbol = currencies
    .filter(currency => currency.abbreviation === countryCode)
    .map(currency => currency.symbol)[0];

  return currencySymbol + input;
};
