import { sum } from "../sum";

test("test the sum function", () => {
  const testCase1 = sum(2, 3);

  expect(testCase1).toBe(9);
});
