let rows = 10;

for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*"; // add a star for each column
    }
    console.log(stars);
}
