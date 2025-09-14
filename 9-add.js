// This line brings in a special tool called 'process', which gives us access to
// information about how our script was run, including any words typed after the file name.
const process = require('process');

// This is where we define a function named 'add'. Think of a function as a reusable
// block of code that performs a specific task. This function takes two inputs,
// which we are naming 'a' and 'b'.
function add(a, b) {
  // This line performs the addition. The `+` symbol adds the two numbers together.
  // The `return` keyword sends the result of the addition back to where the
  // function was called.
  return a + b;
}

// We get the first argument typed by the user. It is the third item in the
// `process.argv` list. We use `parseInt()` to make sure it's a number and not text.
const firstArg = parseInt(process.argv[2]);

// We get the second argument typed by the user. It is the fourth item in the
// `process.argv` list. We use `parseInt()` to make sure it's a number.
const secondArg = parseInt(process.argv[3]);

// This is the final step. We call our `add()` function and give it the two
// numbers we got from the user. We then use `console.log()` to print the
// result that the function returns.
console.log(add(firstArg, secondArg));
