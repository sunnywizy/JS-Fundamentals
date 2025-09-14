// This line brings in a special tool called 'process', which gives us information
// about how our script was started, including any words typed after the file name.
const process = require('process');

// We access the list of arguments using `process.argv`.
// The first two items in this list are always the `node` command and the script name.
// The third item, at index [2], is the very first argument the user provided.
// If the user didn't provide a first argument, this value will be empty, or 'undefined'.
const firstArg = process.argv[2];

// This is a decision-making step. We ask the program a question.
// We are checking if the 'firstArg' variable is 'undefined' (meaning it's empty).
if (firstArg === undefined) {
  // If the answer to the question is YES, we print this message.
  console.log("No argument");
} else {
  // If the answer to the question is NO (meaning the variable is not empty),
  // we print the value of the 'firstArg' variable itself.
  console.log(firstArg);
}
