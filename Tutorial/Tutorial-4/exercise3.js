// 2D array representing seats in a classroom (5 rows x 4 columns)
let classroom = [
  ["Alice", "Bob", "Charlie", "Diana"],
  ["Ethan", "Fiona", "George", "Hannah"],
  ["Ian", "Julia", "Kevin", "Luna"],
  ["Mason", "Nora", "Oliver", "Paula"],
  ["Quinn", "Riley", "Sam", "Tina"]
];

// Print the original seating chart
console.log("Original Classroom Seating Chart:");
for (let i = 0; i < classroom.length; i++) {
  console.log(`Row ${i + 1}: ${classroom[i].join(", ")}`);
}

// Change a student's seat 
let temp = classroom[1][1];     
classroom[1][1] = classroom[2][2];  
classroom[2][2] = temp;             

// Print the updated seating chart
console.log("\nUpdated Classroom Seating Chart:");
for (let i = 0; i < classroom.length; i++) {
  console.log(`Row ${i + 1}: ${classroom[i].join(", ")}`);}
