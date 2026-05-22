const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.random() returns a random decimal in the interval [0, 1)

// (maximum - minimum + 1) gives the size of the interval [minimum, maximum]

// Math.random() * (maximum - minimum + 1)
// gives a random decimal in the interval [0, 100)

// Math.floor() rounds down to the nearest whole number

// + minimum shifts the interval upward by 1,
// so the final integer range becomes [1, 100]

// num should return a random integer between 1 and 100 inclusive
