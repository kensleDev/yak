import { appendCurrency } from "../../src/operators";

test("Operators - number = appendCurrency ", () => {
  expect(appendCurrency("GBP")("test")).toBe("£test");
  expect(appendCurrency("USD")("test")).toBe("$test");

  expect(appendCurrency("GBP", " ")("test")).toBe("£ test");
  expect(appendCurrency("USD", ":")("test")).toBe("$:test");
});
