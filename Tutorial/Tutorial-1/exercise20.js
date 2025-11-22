const prompt = require('prompt-sync')(); 

let input = prompt("PSI: ");
let psi = parseFloat(input);

if (isNaN(psi)) {
    console.log("Invalid input! Please enter a valid number.");
} else {
    if (psi >= 100) {
        console.log("Unhealthy");
    } else if (psi > 50 && psi < 100) {
        console.log("Moderate");
    } else if (psi <= 50) {
        console.log("Healthy");
    }
}
