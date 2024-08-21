jest.mock("../../app/doubles/OthersUtils", () => ({
  ...jest.requireActual("../../app/doubles/OthersUtils"),
  calculateComplexity: () => { return 10}
}));

jest.mock('uuid', () => ({
  v4: () => '123'
}))
import * as OthersUtils from "../../app/doubles/OthersUtils";

describe("module tests", () => {
  test("calculate complexity", () => {
    const result = OthersUtils.calculateComplexity({} as any);
    expect(result).toBe(10);
  });

  test("keep other functions", () => {
    const result = OthersUtils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("string with id", () => {
    const result = OthersUtils.toLowerCaseWithId("ABC");
    expect(result).toBe('abc123');
    
  });
});
