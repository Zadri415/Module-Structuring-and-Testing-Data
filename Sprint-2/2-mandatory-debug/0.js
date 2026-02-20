// Predict and explain first...

// =============> write your prediction here
// It will show a undefined error 
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function printed the answer but did't return it, so when it was used in the template string, it came out as 'undefined.'
// Finally, correct the code to fix the problem
//  =============> write your new code here
 function multiply(a, b) {
      return a * b; 
}

console.log(`The result of multipying 10 and 32 is ${multiply(10, 32)}`);

