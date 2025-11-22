function calculator(operand1, operand2, operator) {
    let result;

    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "*":
            result = operand1 * operand2;
            break;
        case "/":
            if (operand2 !== 0) {
                result = operand1 / operand2;
            } else {
                return "Error: Division by zero!";
            }
            break;
        default:
            return "Invalid operator!";
    }

    return result;
}

console.log("5 + 3 =", calculator(5, 3, "+"));   
console.log("10 - 4 =", calculator(10, 4, "-")); 
console.log("6 * 7 =", calculator(6, 7, "*"));   
console.log("20 / 4 =", calculator(20, 4, "/")); 
console.log("20 / 0 =", calculator(20, 0, "/")); 
console.log("5 ^ 2 =", calculator(5, 2, "^")); 
