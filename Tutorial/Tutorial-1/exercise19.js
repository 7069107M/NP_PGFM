let height1 = 160;
let age1 = 25;

let height2 = 155;
let age2 = 30;

// scores
let score1 = height1 + 5 * age1;
let score2 = height2 + 5 * age2;

// winner
if (score1 > score2) {
    console.log("Player 1 wins with score: " + score1);
} else if (score2 > score1) {
    console.log("Player 2 wins with score: " + score2);
} else {
    console.log("It's a draw");
}
//Three Players 


let height3 = 175;
let age3 = 16;

// scores
let score3 = height3 + 5 * age3;

// winner
if (score1 > score2 && score1 > score3) {
    console.log("Player 1 wins with score: " + score1);
} else if (score2 > score1 && score2 > score3) {
    console.log("Player 2 wins with score: " + score2);
} else if (score3 > score1 && score3 > score2) {
    console.log("Player 3 wins with score: " + score3);
} else {
    console.log("It's a draw");
}
