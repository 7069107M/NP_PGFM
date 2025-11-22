
function calculateInterest(principal, rate, time) {
    let interest = (principal * rate * time) / 100;
    return interest;
}

console.log("Interest 1:", calculateInterest(1000, 5, 2));  
console.log("Interest 2:", calculateInterest(1500, 4.5, 3)); 
console.log("Interest 3:", calculateInterest(2000, 6, 1));  
