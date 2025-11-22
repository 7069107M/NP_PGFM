function isOddOrEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("5 is", isOddOrEven(5)); 
console.log("12 is", isOddOrEven(12));
console.log("0 is", isOddOrEven(0));   
console.log("-7 is", isOddOrEven(-7)); 
