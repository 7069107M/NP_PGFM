const prompt = require('prompt-sync')(); 

let X = parseInt(prompt("Enter dollars (X): "));
let Y = parseInt(prompt("Enter cents (Y): "));
let Z = parseInt(prompt("Enter number of muffins (Z): "));

if (isNaN(X) || isNaN(Y) || isNaN(Z) || X < 0 || Y < 0 || Y >= 100 || Z < 0) {
    console.log("Invalid input! Please enter valid positive numbers. Cents must be 0-99.");
} else {
    let totalCents = (X * 100 + Y) * Z;
    let totalDollars = Math.floor(totalCents / 100);
    let totalRemainingCents = totalCents % 100;

    console.log(
        `Total cost of ${Z} muffins is $${totalDollars} and ${totalRemainingCents} cents ($${(totalCents/100).toFixed(2)})`
    );
}
