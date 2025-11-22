let numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Access and print the element at the second row and third column
// Array indices start at 0, so row 2 → index 1, column 3 → index 2
console.log("Original value at second row, third column:", numbers[1][2]);

// Change the value of this element
numbers[1][2] = 99;

// Print the entire array after modification
console.log("Updated 2D array:");
console.log(numbers);

