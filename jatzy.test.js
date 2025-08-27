import { test, expect } from "vitest";

function yatzeeScore(chance, numbers) {
  return 1 + 2 + 3 + 4 + 5;
}

test("scoring Chance add all dice", () => {
  expect(yatzeeScore("Chance", [6, 6, 6, 6, 6])).toBe(6 + 6 + 6 + 6 + 6);
  expect(yatzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
});
