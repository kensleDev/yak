import {
  pipe,
  reverse,
  firstToUpper,
  appendCurrency,
  logger,
  map
} from "../../src/operators";

test("operators - pipe", () => {
  expect(pipe(reverse, firstToUpper, appendCurrency("USD"))("test")).toBe(
    "$Tset"
  );

  expect(
    pipe(reverse, logger("this is a test"), reverse, reverse)("test")
  ).toBe("tset");

  expect(pipe(map(el => el * 2))([10])).toEqual([20]);
});
