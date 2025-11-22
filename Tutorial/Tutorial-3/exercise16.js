function addNumbers(a, b) {
      let num1 = Number(a);
    let num2 = Number(b);
    
    let sum = num1 + num2;
    return sum; 
}

console.log(addNumbers(10, 20));     
console.log(addNumbers("10", "20")); 
console.log(addNumbers(5, "15"));    
console.log(addNumbers("7", 8));    
