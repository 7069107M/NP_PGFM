function canVote(age) {
    return age >= 21;
}

console.log("Age 18:", canVote(18)); 
console.log("Age 21:", canVote(21)); 
console.log("Age 30:", canVote(30)); 
console.log("Age 15:", canVote(15)); 
