import { test, expect } from "vitest";

function yatzeeScore(chance, numbers) {
  let result = 0;
  for (const die of numbers) {
    result += die;
  }
  return result;
}

test("scoring Chance add all dice", () => {
  expect(yatzeeScore("Chance", [6, 6, 6, 6, 6])).toBe(6 + 6 + 6 + 6 + 6);
  expect(yatzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
});
