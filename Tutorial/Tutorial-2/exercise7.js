const prompt = require('prompt-sync')(); 

for (;;) { 
    let input = prompt("Type 'exit' to stop the loop: ");
    
    if (input === "exit") {
        console.log("You exited the loop!");
        break;  // exit loop
    } else {
        console.log("You typed:", input);
    }
}
