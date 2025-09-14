// This line declares a constant variable named `languages`.
// The `const` keyword means its value cannot be changed later.
// An array is a special type of variable that can hold a list of items.
// In this case, our list contains three strings (pieces of text).
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// This is a loop. Think of it as a set of instructions you want to repeat.
// The `for...of` loop is a simple way to say: "For every single item
// inside the `languages` list, do the following."
// The `language` variable will temporarily hold each item from the list, one by one.
for (const language of languages) {
  // This line is the action we want to repeat.
  // The program will run this line once for "C is fun", then once for "Python is cool",
  // and finally, once for "JavaScript is amazing".
  // Each time, it will print the current value of the `language` variable to the console,
  // creating a new line of output.
  console.log(language);
}
