import { CaseConverter } from "../../src/text/convertCase";
let testPhase = "";
const CC = new CaseConverter();

test("CaseConverter - 2 words", () => {
  testPhase = "test case";
  expect(CC.convert(testPhase, "normal", "kebab")).toBe("test-case");
  expect(CC.convert(testPhase, "normal", "snake")).toBe("test_case");
  expect(CC.convert(testPhase, "normal", "scream")).toBe("TEST_CASE");
  expect(CC.convert(testPhase, "normal", "camel")).toBe("testCase");
  expect(CC.convert(testPhase, "normal", "pascal")).toBe("TestCase");

  testPhase = "test-case";
  expect(CC.convert(testPhase, "kebab", "normal")).toBe("test case");
  expect(CC.convert(testPhase, "kebab", "snake")).toBe("test_case");
  expect(CC.convert(testPhase, "kebab", "scream")).toBe("TEST_CASE");
  expect(CC.convert(testPhase, "kebab", "camel")).toBe("testCase");
  expect(CC.convert(testPhase, "kebab", "pascal")).toBe("TestCase");

  testPhase = "test_case";
  expect(CC.convert(testPhase, "snake", "normal")).toBe("test case");
  expect(CC.convert(testPhase, "snake", "kebab")).toBe("test-case");
  expect(CC.convert(testPhase, "snake", "scream")).toBe("TEST_CASE");
  expect(CC.convert(testPhase, "snake", "camel")).toBe("testCase");
  expect(CC.convert(testPhase, "snake", "pascal")).toBe("TestCase");

  testPhase = "testCase";
  expect(CC.convert(testPhase, "camel", "normal")).toBe("test case");
  expect(CC.convert(testPhase, "camel", "kebab")).toBe("test-case");
  expect(CC.convert(testPhase, "camel", "scream")).toBe("TEST_CASE");
  expect(CC.convert(testPhase, "camel", "snake")).toBe("test_case");
  expect(CC.convert(testPhase, "camel", "pascal")).toBe("TestCase");

  testPhase = "TestCase";
  expect(CC.convert(testPhase, "pascal", "normal")).toBe("test case");
  expect(CC.convert(testPhase, "pascal", "kebab")).toBe("test-case");
  expect(CC.convert(testPhase, "pascal", "scream")).toBe("TEST_CASE");
  expect(CC.convert(testPhase, "pascal", "snake")).toBe("test_case");
  expect(CC.convert(testPhase, "pascal", "camel")).toBe("testCase");
});
