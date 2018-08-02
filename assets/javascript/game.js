// Andrew Ton
// Assignment 3 - Psychic Game
// game.js

// Declare Variables
var wins = 0;
var losses = 0;
var guesses = 9;
var keyGuessed = [];
var randKey = [];

// splits string of letters into indexes on array
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
var winsText = document.getElementById("winsCounter");
var lossesText = document.getElementById("lossesCounter");
var guessesText = document.getElementById("guessesCounter");
var keyText = document.getElementById("keyCounter");

//initial computer pick
randKey = alphabet[Math.floor(Math.random() * alphabet.length)]

// On key press, starts function
document.onkeyup = function (event) {
    var userKey = event.key.toLowerCase();

    // Checks to see if key press is a letter, if so start the play function; else, do nothing.
    for (i = 0; i < alphabet.length; i++) {
        if (userKey === alphabet[i]) {

            //check for duplicate letters
            if (!keyGuessed.includes(userKey)) {
                play(userKey, randKey); //run game
            }
        }
    }
}

// play function, starts game
function play(userKey, mewKey) {

    console.log("user: " + userKey + " mew: " + mewKey); //test
    keyGuessed.push(userKey);

    // you win, reset game
    if (mewKey === userKey) {
        wins++;
        reset();
        alert("You win!"); //test
    }

    // No guesses left, you lose, reset game
else if (guesses != 1) {
        console.log("Choose another letter");
        // change text of guesses and keys pressed
        guesses--;
        guessesText.textContent = guesses;
        keyText.textContent = keyGuessed;
    }

    // guess again
    else {
        losses++;
        reset();
        alert("You lost"); //test
    }
}

// function to reset guesses and display updated score
function reset () {
    guesses = 9;
    keyGuessed = [];
    randKey = alphabet[Math.floor(Math.random() * alphabet.length)]
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesText.textContent = guesses;
    keyText.textContent = keyGuessed;
}