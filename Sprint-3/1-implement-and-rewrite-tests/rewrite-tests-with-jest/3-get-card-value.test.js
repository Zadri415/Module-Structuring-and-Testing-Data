// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test("Should return 11 when given an ace card", () => {
  expect(getCardValue("A♠")).toEqual(11);
});

test("face cards return 10", () => {
  expect(getCardValue("J♣")).toEqual(10);
  expect(getCardValue("Q♦")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
});

test("number cards return their numeric value", () => {
  expect(getCardValue("2♥")).toEqual(2);
  expect(getCardValue("10♥")).toEqual(10);
  expect(getCardValue("9♥")).toEqual(9);
});

test("invalid input throw", () => {
  expect(() => getCardValue("invalid")).toThrow();
  expect(() => getCardValue("A")).toThrow();
  expect(() => getCardValue(null)).toThrow();
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
//   Face Cards (J, Q, K)
//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
