const prompt = require('prompt-sync')(); 

let radius = parseFloat(prompt("Enter the radius of the circle: "));
let pi = 3.14;
let area = pi * radius * radius;

console.log(area.toFixed(2));
