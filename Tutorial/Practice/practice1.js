// Literal object
const momobae = {
  name: "Momobae",          // string
  specialty: "K-Pop",       // string
  power: 49,                // number
  hitpoints: 28,            // number
  level: 7,                 // number
  gender: "Female"          // string
};


// Function-based object constructor
function Singer(name, specialty, power, hitpoints, level, gender) {
  // Properties
  this.name = name;
  this.specialty = specialty;
  this.power = power;
  this.hitpoints = hitpoints;
  this.level = level;
  this.gender = gender;

  // Method to calculate maximum power
  this.maxPower = function() {
    return (this.power * this.level) - this.hitpoints;
  };

  // Method to get hitpoint status
  this.hitpointStatus = function() {
    if (this.hitpoints <= 50) {
      return "Weak";
    } else if (this.hitpoints <= 70) {
      return "Strong";
    } else {
      return "Amazing";
    }
  };

  // Method to display profile using template literals
  this.singerProfile = function() {
    console.log(
      `${this.name} Level ${this.level}, gender ${this.gender}, specialty '${this.specialty}'.\n` +
      `Power ${this.power}!\n` +
      `Hitpoints: ${this.hitpointStatus()}.`
    );
  };
}

// Create two singer objects
const momobaeSinger = new Singer("Momobae", "K-Pop", 49, 28, 7, "Female");
const minabae = new Singer("Minabae", "Pop Rock", 65, 72, 8, "Female");

// Display their profiles
momobaeSinger.singerProfile();
minabae.singerProfile();

// Example: show calculated maximum power
console.log(`Momobae's Max Power: ${momobaeSinger.maxPower()}`);
console.log(`Minabae's Max Power: ${minabae.maxPower()}`);
