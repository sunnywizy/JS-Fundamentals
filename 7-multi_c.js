// This line brings in a special tool called 'process', which gives us access to
// information about how our script was run, including any words typed after the file name.
const process = require('process');

// We access the first argument typed by the user. This is the third item in a
// special list called `process.argv` (the first two items are the command
// `node` and the script name itself).
const firstArg = process.argv[2];

// This line attempts to convert the text from `firstArg` into a whole number.
// If the text cannot be converted into a number (like "hello"), this command
// will result in a special value called NaN, which stands for "Not a Number".
const num = parseInt(firstArg);

// This is our main decision-making step. We are asking a question:
// "Is the value of `num` the special value NaN?"
if (isNaN(num)) {
  // If the answer is YES (it's NaN), we print this message and stop.
  console.log("Missing number of occurrences");
} else {
  // If the answer to the question is NO (it's a valid number), we run this code.
  // We start with an empty variable that will hold our final output string.
  let output = "";

  // This is a for loop. It's designed to repeat a task a specific number of times.
  // We set it to repeat `num` times.
  for (let i = 0; i < num; i++) {
    // In each repetition, we add the text "C is fun" and a newline character (`\n`)
    // to our `output` variable. The `\n` character tells the computer to start a new line.
    output += "C is fun\n";
  }

  // After the loop has finished, we use our second and final `console.log`
  // command to print the entire multi-line string that we built.
  // The `.trim()` part removes any extra space or newline at the very end.
  console.log(output.trim());
}
