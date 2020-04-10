import { CountryCode, Currencies } from "../../shared/models";
import { currenciesData } from "../../services/data/json.service";

export const appendCurrency = (
  countryCode: CountryCode,
  dilimeter?: string
) => (input: string) => {
  // console.log(countryCode);
  const currencies: Currencies = currenciesData;

  const currentCountry = currencies[countryCode];

  return dilimeter
    ? currentCountry.symbol_native + dilimeter + input
    : currentCountry.symbol_native + input;
};
