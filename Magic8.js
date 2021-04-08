//starting my code here :)
//trying to get the user to shake the magic 8 ball
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const messagesArr = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "It is certain.", "It is decidedly so."];
let randomIndex = Math.floor(Math.random() * 8);

rl.question("Think of a question for the magic 8 ball and type the word shake: ", function(entry) {
    if(entry !== "shake") {
        console.log("Please type in the word shake to shake the magic 8 ball");
    } else {
        console.log(messagesArr[randomIndex]);
    }
    rl.close();
});

/* I don't really understand what this is doing - guidance says it's optional
rl.on("close", function() {
    process.exit(0);
}); 
*/