// 2D array with values
let matrix = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
];

// Use nested loops to print each element
console.log("2D Array Elements with Coordinates:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Element at [${i}][${j}] = ${matrix[i][j]}`);
  }
}
