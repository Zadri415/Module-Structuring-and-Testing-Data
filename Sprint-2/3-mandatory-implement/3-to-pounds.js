// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function formatPenceToPounds(penceString){
  const penceStringWithoutTrailingP = penceString.substring(0, penceString.length -1);
  const pounds = paddedPenceNumberString.slice(0, -2);
     return `£${pounds}.${pence}`;
}

console.log(formatPenceToPounds("9p"));
console.log(formatPenceToPounds("39p"));
console.log(formatPenceToPounds("399"));
