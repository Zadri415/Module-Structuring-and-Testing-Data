// This statement loads the isProperFraction function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const isProperFraction = require("../implement/2-is-proper-fraction");

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
// Tests using top-level `test()` calls

test("denominator 0 returns false", () => {
  expect(isProperFraction(1, 0)).toBe(false);
});

test("1/2 is a proper fraction", () => {
  expect(isProperFraction(1, 2)).toBe(true);
});

test("2/4 is a proper fraction (non-reduced)", () => {
  expect(isProperFraction(2, 4)).toBe(true);
});

test("5/4 is not a proper fraction", () => {
  expect(isProperFraction(5, 4)).toBe(false);
});

test("2/2 is not a proper fraction (equal numerator and denominator)", () => {
  expect(isProperFraction(2, 2)).toBe(false);
});

test("0/5 is proper", () => {
  expect(isProperFraction(0, 5)).toBe(true);
});

test("0/-5 is proper (negative denominator)", () => {
  expect(isProperFraction(0, -5)).toBe(true);
});

test("negative numerator handled via absolute value", () => {
  expect(isProperFraction(-1, 2)).toBe(true);
});

test("negative denominator handled via absolute value", () => {
  expect(isProperFraction(1, -2)).toBe(true);
});

test("both negative handled via absolute value", () => {
  expect(isProperFraction(-3, -4)).toBe(true);
});

test("-3/3 is not proper (equal abs values)", () => {
  expect(isProperFraction(-3, 3)).toBe(false);
});

test("decimal numerator works (0.5/1)", () => {
  expect(isProperFraction(0.5, 1)).toBe(true);
});

test("decimal where numerator > denominator (1/0.9999)", () => {
  expect(isProperFraction(1, 0.9999)).toBe(false);
});

// Optional: uncomment if implementation is updated to reject non-finite values
// test('NaN inputs return false', () => {
//   expect(isProperFraction(NaN, 1)).toBe(false);
//   expect(isProperFraction(1, NaN)).toBe(false);
// });

// test('Infinity inputs return false', () => {
//   expect(isProperFraction(Infinity, 1)).toBe(false);
//   expect(isProperFraction(1, Infinity)).toBe(false);
// });
