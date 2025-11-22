// square 2D array (n x n)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Print the main diagonal elements (where row index = column index)
console.log("Main Diagonal Elements:");
for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}

// Print the secondary diagonal elements (where row index + column index = n - 1)
console.log("\nSecondary Diagonal Elements:");
let n = matrix.length;
for (let i = 0; i < n; i++) {
  console.log(matrix[i][n - 1 - i]);
}