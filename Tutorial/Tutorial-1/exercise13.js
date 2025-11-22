
let a = 5;
let b = 10;

//temporary variable

let temp = a;
a = b;
b = temp;

console.log("swapp using temporary variable:");
console.log("a =", a);
console.log("b =", b);


// Without Temporary Variable 

let a = 5;
let b = 10;

// Swap with arithmetic operation
a = a + b;  
b = a - b;  
a = a - b;  

console.log("swapping without temporary variable:");
console.log("a =", a);
console.log("b =", b);
