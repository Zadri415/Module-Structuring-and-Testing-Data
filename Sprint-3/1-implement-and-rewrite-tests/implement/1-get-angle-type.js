// Implement a function getAngleType
//
// When given an angle in degrees, it should return a string indicating the type of angle:
// - "Acute angle" for angles greater than 0° and less than 90°
// - "Right angle" for exactly 90°
// - "Obtuse angle" for angles greater than 90° and less than 180°
// - "Straight angle" for exactly 180°
// - "Reflex angle" for angles greater than 180° and less than 360°
// - "Invalid angle" for angles outside the valid range.

const { assertEquals, isProperFraction } = require("./2-is-proper-fraction");

// Assumption: The parameter is a valid number. (You do not need to handle non-numeric inputs.)

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getAngleType(angle) { // This function should return a string indicating the type of angle based on the input angle in degrees.
  // TODO: Implement this function
  if (angle > 0 && angle < 90) 
    return "Acute angle";
  else if (angle === 90)
    return "Right angle";
  else if (angle > 90 && angle < 180)
    return "obtuse angle";
  else if (angle === 180)
    return "Straight angle"
  else if (angle > 180 && angle < 360)
    return "Reflex angle";
  else
    return "Invalid angle";
}

// The line below allows us to load the getAngleType function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getAngleType;

// This helper function is written to make our assertions easier to read.
// If the actual output matches the target output, the test will pass
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles
const right = getAngleType(90);
assertEquals(right, "Right angle");

const acute = getAngleType(45);
assertEquals(acute, "Acute angle");

const obtuse = getAngleType(120);
assertEquals(obtuse, "obtuse angle");

const straight = getAngleType(180);
assertEquals(straight, "Straight angle");

const relex = getAngleType(270);
assertEquals(relex, "Reflex angle");

const invalid = getAngleType(400);
assertEquals(invalid, "Invalid angle");
assertEquals(isProperFraction(2, 2), false);
assertEquals(isProperFraction(0, 0), false);
// Case 3: Obtuse angles
test(`should return "obtuse angle" when (90 < angle < 180)`, () => {
  expect(getAngleType(120)).toEqual("obtuse angle");
  expect(getAngleType(179)).toEqual("obtuse angle");
  expect(getAngleType(179.99)).toEqual("obtuse angle");
  expect(getAngleType(179.999)).toEqual("obtuse angle");
  expect(getAngleType(179.9999)).toEqual("obtuse angle");
  expect(getAngleType(179.99999)).toEqual("obtuse angle");
  expect(getAngleType(179.999999)).toEqual("obtuse angle");
  expect(getAngleType(179.9999999)).toEqual("obtuse angle");
  expect(getAngleType(179.99999999)).toEqual("obtuse angle");
  expect(getAngleType(179.999999999)).toEqual("obtuse angle");

});
