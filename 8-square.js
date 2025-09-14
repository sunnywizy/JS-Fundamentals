// This line brings in a special tool called 'process', which gives us access to
// information about how our script was run, including any words typed after the file name.
const process = require('process');

// We access the first argument typed by the user, which is the third item in a
// special list called `process.argv` (the first two items are the command
// `node` and the script name itself).
const firstArg = process.argv[2];

// This line attempts to convert the text from `firstArg` into a whole number.
// If the text cannot be converted to a number, this command will result in a
// special value called NaN, which stands for "Not a Number".
const size = parseInt(firstArg);

// This is our main decision-making step. We are asking a question:
// "Is the value of `size` the special value NaN?"
if (isNaN(size)) {
  // If the answer is YES (it's NaN), we print this message.
  console.log("Missing size");
} else {
  // If the answer to the question is NO (it's a valid number), we run this code.

  // This is the outer loop. It's responsible for printing each row of the square.
  // It will repeat `size` times, once for each row.
  for (let i = 0; i < size; i++) {
    // We create a temporary empty string to build our row.
    let row = "";

    // This is the inner loop. It's responsible for building a single row of 'X's.
    // It will also repeat `size` times, once for each 'X' in the row.
    for (let j = 0; j < size; j++) {
      // We add an 'X' to the end of our `row` string.
      row += "X";
    }

    // After the inner loop has finished building the full row, we print it to the console.
    // This creates one complete line of the square.
    console.log(row);
  }
}
