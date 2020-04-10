import { reverse, firstToUpper, convertCase } from "../../src/operators";

test("operators - text - reverse ", () => {
  expect(reverse("test")).toBe("tset");
  expect(reverse("testtest")).toBe("tsettset");
});

test("operators - text - firstToUpper ", () => {
  expect(firstToUpper("test")).toBe("Test");
});

let ccTestPhrase = "";
test("operators - text - convertCase: 2 words", () => {
  ccTestPhrase = "test case";
  expect(convertCase("normal", "kebab")(ccTestPhrase)).toBe("test-case");
  expect(convertCase("normal", "snake")(ccTestPhrase)).toBe("test_case");
  expect(convertCase("normal", "scream")(ccTestPhrase)).toBe("TEST_CASE");
  expect(convertCase("normal", "camel")(ccTestPhrase)).toBe("testCase");
  expect(convertCase("normal", "pascal")(ccTestPhrase)).toBe("TestCase");

  ccTestPhrase = "test-case";
  expect(convertCase("kebab", "normal")(ccTestPhrase)).toBe("test case");
  expect(convertCase("kebab", "snake")(ccTestPhrase)).toBe("test_case");
  expect(convertCase("kebab", "scream")(ccTestPhrase)).toBe("TEST_CASE");
  expect(convertCase("kebab", "camel")(ccTestPhrase)).toBe("testCase");
  expect(convertCase("kebab", "pascal")(ccTestPhrase)).toBe("TestCase");

  ccTestPhrase = "test_case";
  expect(convertCase("snake", "normal")(ccTestPhrase)).toBe("test case");
  expect(convertCase("snake", "kebab")(ccTestPhrase)).toBe("test-case");
  expect(convertCase("snake", "scream")(ccTestPhrase)).toBe("TEST_CASE");
  expect(convertCase("snake", "camel")(ccTestPhrase)).toBe("testCase");
  expect(convertCase("snake", "pascal")(ccTestPhrase)).toBe("TestCase");

  ccTestPhrase = "testCase";
  expect(convertCase("camel", "normal")(ccTestPhrase)).toBe("test case");
  expect(convertCase("camel", "kebab")(ccTestPhrase)).toBe("test-case");
  expect(convertCase("camel", "scream")(ccTestPhrase)).toBe("TEST_CASE");
  expect(convertCase("camel", "snake")(ccTestPhrase)).toBe("test_case");
  expect(convertCase("camel", "pascal")(ccTestPhrase)).toBe("TestCase");

  ccTestPhrase = "TestCase";
  expect(convertCase("pascal", "normal")(ccTestPhrase)).toBe("test case");
  expect(convertCase("pascal", "kebab")(ccTestPhrase)).toBe("test-case");
  expect(convertCase("pascal", "scream")(ccTestPhrase)).toBe("TEST_CASE");
  expect(convertCase("pascal", "snake")(ccTestPhrase)).toBe("test_case");
  expect(convertCase("pascal", "camel")(ccTestPhrase)).toBe("testCase");
});

test("operators - text - convertCase: Edges", () => {
  ccTestPhrase = "test case one";
  expect(convertCase("normal", "kebab")(ccTestPhrase)).toBe("test-case-one");

  ccTestPhrase = "test case one one one";
  expect(convertCase("normal", "kebab")(ccTestPhrase)).toBe(
    "test-case-one-one-one"
  );

  ccTestPhrase = "test-case-one";
  expect(convertCase("kebab", "normal")(ccTestPhrase)).toBe("test case one");

  ccTestPhrase = "test_case_one";
  expect(convertCase("snake", "normal")(ccTestPhrase)).toBe("test case one");

  ccTestPhrase = "testCaseOne";
  expect(convertCase("camel", "normal")(ccTestPhrase)).toBe("test case one");

  ccTestPhrase = "TestCaseOne";
  expect(convertCase("pascal", "normal")(ccTestPhrase)).toBe("test case one");
});
