function sumEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // Check if the number is even
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// Example test
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Should return 12

