import { test, expect } from "vitest";

function checkDie(category, numbersArray) {
  let result = 0;

  function dieRoll(dieCategory, number) {
    if (dieCategory === category) {
      for (const die of numbersArray) {
        if (die === number) {
          result += number;
        }
      }
    }
  }
  dieRoll("Twos", 2);
  dieRoll("Ones", 1);

  return result;
}
//hehe
test("scoring Chance add all dice", () => {
  expect(checkDie("Ones", [1, 1, 3, 4, 5])).toBe(2);
  expect(checkDie("Ones", [1, 1, 1, 1, 1])).toBe(5);
  expect(checkDie("Ones", [1, 5, 6, 1, 1])).toBe(3);
  expect(checkDie("Twos", [2, 2, 6, 1, 1])).toBe(4); //hehe
});
