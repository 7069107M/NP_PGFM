// 2D array of numbers
let numbers = [
  [2, 4, 6],
  [1, 3, 5],
  [7, 8, 9]
];

// variable to store the sum
let sum = 0;

// Use nested loops to go through each element and add to the sum
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    sum += numbers[i][j];
  }
}

// Print the result
console.log("The sum of all elements in the 2D array is:", sum);
