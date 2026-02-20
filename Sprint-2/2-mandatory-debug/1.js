// Predict and explain first...
//  =============> write your prediction here
// I predict it will show a undefined error

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The problem was the semicolon after return, which made the function stop before adding the numbers
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b){
  return a + b; // Once I put a + b on the same line as return, it worked
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
