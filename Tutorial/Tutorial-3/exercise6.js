function checkAge(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teen";
    } else if (age >= 20) {
        return "Adult";
    } else {
        return "Invalid age";
    }
}

console.log("Age 8:", checkAge(8));   
console.log("Age 15:", checkAge(15)); 
console.log("Age 25:", checkAge(25)); 
console.log("Age -3:", checkAge(-3)); 