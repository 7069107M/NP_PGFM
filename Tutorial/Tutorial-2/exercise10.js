// array
let numbers = [7, 3, 5, 7, 9];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("The largest number in the array is:", max);
