// Reverse array
function reverseArray(arr) {
    let reversed = [];
    // last element to the first
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = reverseArray(numbers);

console.log("Original array:", numbers);
console.log("Reversed array:", reversedNumbers);
