const prompt = require('prompt-sync')();

let birthYear = prompt("Enter your birth year: ");
let currentYear = prompt("Enter the current year: ");

let age = currentYear - birthYear;

console.log(age);
