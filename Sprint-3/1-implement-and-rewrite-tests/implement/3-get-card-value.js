// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// Implement a function getCardValue, when given a string representing a playing card,
// should return the numerical value of the card.

// A valid card string will contain a rank followed by the suit.
// The rank can be one of the following strings:
//   "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"
// The suit can be one of the following emojis:
//   "♠", "♥", "♦", "♣"
// For example: "A♠", "2♥", "10♥", "J♣", "Q♦", "K♦".

// When the card is an ace ("A"), the function should return 11.
// When the card is a face card ("J", "Q", "K"), the function should return 10.
// When the card is a number card ("2" to "10"), the function should return its numeric value.

// When the card string is invalid (not following the above format), the function should
// throw an error.

// Acceptance criteria:
// After you have implemented the function, write tests to cover all the cases, and
// execute the code to ensure all tests pass.

function getCardValue(card) {
  // TODO: Implement this function
  const rank = card.slice(0, -1); // get the rank by slicing off the last character (the suit)
  const suit = card.slice(-1); // get the suit by taking the last character

  const validSuits = ["♠", "♥", "♦", "♣"]; // Define valid suits
  if (!validSuits.includes(suit)) { // check if the suit is valid
    throw new Error("Invalid card"); // If the suit is not valid, throw an error
  }

  const faceCardValues = { // Define the values for face cards and ace
    "A": 11, // Ace is worth 11
    "J": 10, // Jack is worth 10
    "Q": 10, // Queen is worth 10
    "K": 10  // King is worth 10
  };
  if (faceCardValues[rank]) {  // Check if the rank is a face card or ace
    return faceCardValues[rank]; // If it is, return the corresponding value
  }

  const numericValue = parseInt(rank); // Try to parse the rank as a number
  if (numericValue >= 2 && numericValue <= 10) { // check if the numeric value is between 2 and 10
    return numericValue; // If it is, return the numeric value
  }

  throw new Error("Invalid card"); // If the rank is not valid (not a face card, ace, or number between 2 and 10), throw an error
}
console.log(getCardValue("A♠")); // 11
console.log(getCardValue("2♥")); // 2
console.log(getCardValue("J♣")); // 10

// The line below allows us to load the getCardValue function into tests in other files.
// This will be useful in the "rewrite tests with jest" step.
module.exports = getCardValue;

// Helper functions to make our assertions easier to read.
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.
// Examples:
assertEquals(getCardValue("9♠"), 9);
assertEquals(getCardValue("A♥"), 11);
assertEquals(getCardValue("J♣"), 10);
assertEquals(getCardValue("Q♦"), 10);
assertEquals(getCardValue("K♠"), 10);
assertEquals(getCardValue("10♥"), 10);
assertEquals(getCardValue("2♦"), 2);


// Handling invalid cards

try {
  getCardValue("1 ♠"); // Invalid rank
  // This line will not be reached if an error is thrown as expected
  console.error("Error was not thrown for invalid card");
} catch (e) {}


// What other invalid card cases can you think of?
try {
  getCardValue("11♠"); // Invalid rank
  console.error("Error was not thrown for invalid card");
} catch (e) {}

try {
  getCardValue("h♠"); // Valid card
  console.error("Error was thrown for valid card");
} catch (e) {}
