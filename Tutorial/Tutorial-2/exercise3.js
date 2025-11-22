const prompt = require('prompt-sync')();

let number;

do {
    number = parseInt(prompt("Enter a number between 1 and 10: "));
} while (isNaN(number) || number < 1 || number > 10);

console.log("You entered a valid number:", number);
