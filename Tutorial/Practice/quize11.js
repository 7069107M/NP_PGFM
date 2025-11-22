function countOddNumbers(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countOddNumbers([1, 2, 3, 4, 5, 6])); // Should return 3
console.log(countOddNumbers([2, 4, 6, 8])); // Should return 0