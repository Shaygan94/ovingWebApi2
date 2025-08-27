import { test, expect } from "vitest";

function yatzeeScore(category, numbers) {
  let result = 0;
  if (category === "Ones") {
    for (const die of numbers) {
      if (die == 1) {
        result += 1;
      }
    }
    return result;
  }

  if (category === "Twos") {
    for (const die of numbers) {
      if (die == 2) {
        result += 2;
      }
    }
    return result;
  }

  for (const die of numbers) {
    result += die;
  }
  return result;
}

function checkDie(category, die, numbers) {}

test("scoring Chance add all dice", () => {
  expect(yatzeeScore("Chance", [6, 6, 6, 6, 6])).toBe(30);
  expect(yatzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1 + 2 + 3 + 4 + 5);
  expect(yatzeeScore("Ones", [1, 1, 3, 4, 5])).toBe(2);
  expect(yatzeeScore("Ones", [1, 1, 1, 1, 1])).toBe(5);
  expect(yatzeeScore("Twos", [2, 2, 1, 1, 1])).toBe(4);
});
