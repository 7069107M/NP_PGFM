// 2D array
let numbers = [
  [3, 8, 2, 10],
  [15, 6, 9, 12],
  [7, 14, 4, 11]
];

// Iterate through each row
console.log("Largest number in each row:");
for (let i = 0; i < numbers.length; i++) {
  // Find the largest number in the current row
  let largest = numbers[i][0]; // let first element is the largest
  for (let j = 1; j < numbers[i].length; j++) {
    if (numbers[i][j] > largest) {
      largest = numbers[i][j];
    }
  }

  // Print the largest number for this row
  console.log(`Row ${i + 1}: ${largest}`);
}
