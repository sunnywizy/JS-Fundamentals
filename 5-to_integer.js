// This line brings in a special tool called 'process', which gives us information
// about how our script was run, including any words typed after the file name.
const process = require('process');

// We access the first argument typed by the user. This is the third item in a
// special list called `process.argv` (the first two items are the command
// `node` and the script name itself).
const firstArg = process.argv[2];

// This line attempts to convert the text from `firstArg` into a whole number.
// For example, it will turn "123" into the number 123.
// If the text cannot be converted into a number (like "hello"), this command
// will result in a special value called NaN, which stands for "Not a Number".
const number = parseInt(firstArg);

// This is our main decision-making step. We are asking a question:
// "Is the value of `number` the special value NaN?"
// This is how we check if the conversion to a number failed.
if (isNaN(number)) {
  // If the answer to the question is YES (it's NaN), we print this message.
  console.log("Not a number");
} else {
  // If the answer to the question is NO (it's a valid number), we run this code.
  // We combine the text "My number: " with the number we just converted and print it.
  console.log("My number: " + number);
}
