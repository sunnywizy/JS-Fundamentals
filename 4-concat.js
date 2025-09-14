// This line brings in a special tool called 'process', which gives us access to
// information about how our script was run, including any words typed after the file name.
const process = require('process');

// We access the first word (argument) typed by the user, which is at index 2
// in the `process.argv` list, and store it in a constant called `arg1`.
const arg1 = process.argv[2];

// We access the second word (argument) typed by the user, at index 3, and
// store it in a constant called `arg2`.
const arg2 = process.argv[3];

// This line combines the two arguments with the word "is" in between,
// along with a space on either side, and prints the final combined message to the console.
console.log(arg1 + " is " + arg2);
