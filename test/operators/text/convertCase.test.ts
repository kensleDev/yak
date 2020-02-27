import { convertCase } from "../../../src/operators/text/convertCase";
let testPhase = "";
test("CaseConverter - 2 words", () => {
  testPhase = "test case";
  expect(convertCase(testPhase, "normal", "kebab")).toBe("test-case");
  expect(convertCase(testPhase, "normal", "snake")).toBe("test_case");
  expect(convertCase(testPhase, "normal", "scream")).toBe("TEST_CASE");
  expect(convertCase(testPhase, "normal", "camel")).toBe("testCase");
  expect(convertCase(testPhase, "normal", "pascal")).toBe("TestCase");

  testPhase = "test-case";
  expect(convertCase(testPhase, "kebab", "normal")).toBe("test case");
  expect(convertCase(testPhase, "kebab", "snake")).toBe("test_case");
  expect(convertCase(testPhase, "kebab", "scream")).toBe("TEST_CASE");
  expect(convertCase(testPhase, "kebab", "camel")).toBe("testCase");
  expect(convertCase(testPhase, "kebab", "pascal")).toBe("TestCase");

  testPhase = "test_case";
  expect(convertCase(testPhase, "snake", "normal")).toBe("test case");
  expect(convertCase(testPhase, "snake", "kebab")).toBe("test-case");
  expect(convertCase(testPhase, "snake", "scream")).toBe("TEST_CASE");
  expect(convertCase(testPhase, "snake", "camel")).toBe("testCase");
  expect(convertCase(testPhase, "snake", "pascal")).toBe("TestCase");

  testPhase = "testCase";
  expect(convertCase(testPhase, "camel", "normal")).toBe("test case");
  expect(convertCase(testPhase, "camel", "kebab")).toBe("test-case");
  expect(convertCase(testPhase, "camel", "scream")).toBe("TEST_CASE");
  expect(convertCase(testPhase, "camel", "snake")).toBe("test_case");
  expect(convertCase(testPhase, "camel", "pascal")).toBe("TestCase");

  testPhase = "TestCase";
  expect(convertCase(testPhase, "pascal", "normal")).toBe("test case");
  expect(convertCase(testPhase, "pascal", "kebab")).toBe("test-case");
  expect(convertCase(testPhase, "pascal", "scream")).toBe("TEST_CASE");
  expect(convertCase(testPhase, "pascal", "snake")).toBe("test_case");
  expect(convertCase(testPhase, "pascal", "camel")).toBe("testCase");
});

test("CaseConverter - Edges", () => {
  testPhase = "test case one";
  expect(convertCase(testPhase, "normal", "kebab")).toBe("test-case-one");

  testPhase = "test case one one one";
  expect(convertCase(testPhase, "normal", "kebab")).toBe(
    "test-case-one-one-one"
  );

  testPhase = "test-case-one";
  expect(convertCase(testPhase, "kebab", "normal")).toBe("test case one");

  testPhase = "test_case_one";
  expect(convertCase(testPhase, "snake", "normal")).toBe("test case one");

  testPhase = "testCaseOne";
  expect(convertCase(testPhase, "camel", "normal")).toBe("test case one");

  testPhase = "TestCaseOne";
  expect(convertCase(testPhase, "pascal", "normal")).toBe("test case one");
});
