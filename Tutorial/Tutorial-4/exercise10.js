// Original traditional function

function add(a, b) {
  return a + b;
}

// Converted arrow function
const addArrow = (a, b) => a + b;

console.log("Traditional function result:", add(5, 10));
console.log("Arrow function result:", addArrow(5, 10));
