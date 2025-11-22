let principal = 1000;
let rate = 0.05;      // interest rate (5%)
let amount = principal;
let years = 0;

// Calculate until the amount doubles
while (amount < 2 * principal) {
    amount += principal * rate; 
    years++;
}

console.log("It takes " + years + " years for the amount to double.");
console.log("Total amount: $" + amount.toFixed(2));
