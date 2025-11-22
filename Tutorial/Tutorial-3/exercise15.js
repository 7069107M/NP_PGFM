function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log("Largest between 5 and 10:", findLargest(5, 10));  
console.log("Largest between 15 and 7:", findLargest(15, 7)); 
console.log("Largest between 20 and 20:", findLargest(20, 20)); 
console.log("Largest between -5 and 3:", findLargest(-5, 3));  
