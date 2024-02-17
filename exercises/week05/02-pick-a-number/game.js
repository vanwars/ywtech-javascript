function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
let numGuesses = 0;
console.log(secret);

function check() {
    // each time the user clicks the check() button, add 1 to
    // the numGuesses variable:
    numGuesses = numGuesses + 1;

    // your code here
    let playerGuess = document.querySelector("#guess").value; // string
    let message;
    playerGuess = Number(playerGuess); // number
    // pretend the secret = 56 and pretend the playerGuess is 99.
    if (playerGuess < secret) {
        message = "Too low!";
    } else if (playerGuess > secret) {
        message = "Too high!";
    } else {
        message = "You win!";
    }

    // Write to the DOM:
    document.querySelector("#message").innerHTML = message;
    document.querySelector("#num_guesses").innerHTML = numGuesses;
}
