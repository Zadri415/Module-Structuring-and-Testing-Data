// Implement a function isProperFraction,
// when given two numbers, a numerator and a denominator, it should return true if
// the given numbers form a proper fraction, and false otherwise.

// Assumption: The parameters are valid numbers (not NaN or Infinity).

// Note: If you are unfamiliar with proper fractions, please look up its mathematical definition.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function isProperFraction(numerator, denominator) {
  // TODO: Implement this function
  if (denominator === 0){
    return false;
  }
  
  return numerator < denominator;

}
exports.isProperFraction = isProperFraction;

// The line below allows us to load the isProperFraction function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = isProperFraction;

// Here's our helper again
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}
exports.assertEquals = assertEquals;

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

// Example: 1/2 is a proper fraction
assertEquals(isProperFraction(1, 2), true); // 2 is greater than 1, so this should return true.
assertEquals(isProperFraction(2, 1), false); // 1 is not greater than 2, so this should return false.
assertEquals(isProperFraction(0, 1), true);
assertEquals(isProperFraction(1, 0), false);
assertEquals(isProperFraction(-1, 2), true);
assertEquals(isProperFraction(1, -2), false);
assertEquals(isProperFraction(-1, -2), false);

