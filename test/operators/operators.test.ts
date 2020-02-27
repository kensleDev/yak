import { pipe, reverse, firstToUpper } from "../../src/operators";

test("Operators - reverse ", () => {
  expect(pipe(reverse)("test")).toBe("tset");
});

test("Operators - firstToUpper ", () => {
  expect(pipe(firstToUpper)("test")).toBe("Test");
});
