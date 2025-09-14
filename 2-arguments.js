// This line imports the built-in 'process' object from Node.js,
// which gives us information about the current process, like command-line arguments.
const process = require('process');

// The `process.argv` variable is an array (a list of items) that contains
// all the arguments passed to the script.
// It always includes at least two items by default:
// 1. The path to the 'node' program
// 2. The path to the script file you are running
// So, we subtract 2 to get the actual number of user-provided arguments.
const argCount = process.argv.length - 2;

// We use an 'if-else if-else' structure to check for different conditions.
// This is like a decision-making tree for your program.

// Condition 1: Check if the number of arguments is exactly 0.
if (argCount === 0) {
  // If the condition is true, print the message "No argument".
  console.log("No argument");
}
// Condition 2: If the first condition was false, check if the number is exactly 1.
else if (argCount === 1) {
  // If this condition is true, print the message "Argument found".
  console.log("Argument found");
}
// Condition 3: If neither of the above conditions was true, do this.
// This catches all other cases (2, 3, 4, or more arguments).
else {
  // Print the message "Arguments found".
  console.log("Arguments found");
}
