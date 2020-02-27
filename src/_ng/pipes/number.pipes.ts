import { Pipe, PipeTransform } from "@angular/core";
import { CountryCode } from "@app/shared/models";
import { appendCurrency } from "../../operators";

@Pipe({ name: "appendCurrency" })
export class appendCurrencyPipe implements PipeTransform {
  transform(value: string, countryCode: CountryCode): string {
    return appendCurrency(countryCode)(value);
  }
}
