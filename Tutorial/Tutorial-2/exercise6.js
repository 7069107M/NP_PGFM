const prompt = require('prompt-sync')();

const correctNumber = 7;
let guess;

do {
    guess = parseInt(prompt("Guess the number: "));
} while (guess !== correctNumber);

console.log("You guessed the correct number:", correctNumber);
