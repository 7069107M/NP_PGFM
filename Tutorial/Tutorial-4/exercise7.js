// 2D array representing product inventory
// Each row represents a product: [Product Name, Price, Quantity]
let inventory = [
  ["Laptop", 1200, 10],
  ["Smartphone", 800, 25],
  ["Tablet", 500, 15],
  ["Headphones", 150, 30],
  ["Smartwatch", 200, 20]
];

// Print the original inventory
console.log("Original Product Inventory:");
for (let i = 0; i < inventory.length; i++) {
  console.log(`Product: ${inventory[i][0]}, Price: $${inventory[i][1]}, Quantity: ${inventory[i][2]}`);
}

// Update the quantity of a specific product (e.g., sell 5 smartphones)
for (let i = 0; i < inventory.length; i++) {
  if (inventory[i][0] === "Smartphone") {
    inventory[i][2] -= 5; // Reduce quantity by 5
    console.log(`\nUpdated quantity for ${inventory[i][0]}: ${inventory[i][2]}`);
  }
}

// Print the updated inventory
console.log("\nUpdated Product Inventory:");
for (let i = 0; i < inventory.length; i++) {
  console.log(`Product: ${inventory[i][0]}, Price: $${inventory[i][1]}, Quantity: ${inventory[i][2]}`)}
