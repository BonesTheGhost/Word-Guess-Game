/*Setting up the array for the computer choices and testing to make sure it works properly*/
console.log("I'm working!");

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerLetter = "";

var playerKeyChoice = "";

var numberOfTurns = 9;

var playerWins = 0;
var playerLosses = 0;







function computerGeneration() {
    //Checking the computer array was made properly
    console.log("This is the data Array: ", computerChoices);
    for (i = 0; i < computerChoices.length; i++) {
        console.log("Letter= ", computerChoices[i], " | ARRAY INDEX= ", i, " | ALPHABET POSITION= ", i + 1);
    }

    //Initialize Random Number based on length of computerChoices array (between 1 and 26)
    computerRandomInt = Math.floor((Math.random() * computerChoices.length) + 1);
    console.log("Random Number = ", computerRandomInt)

    //control for zero-based indexing
    computerRandomInt -= 1;
    console.log("***ADJUSTED RANDOM NUMBER= ", computerRandomInt);

    //Grab that choice from the array
    var computerPick = computerChoices[computerRandomInt];
    console.log("The Associated letter is = ", computerPick);

    return computerPick
};




//Run the computer choice generation for the first time.
computerLetter = computerGeneration();

//Main Game for loop for the standard length of 9
for (t = 0; t <= numberOfTurns + 2; t++) {

    //Player entry
    document.onkeyup = function logKey() {
        var playerKeyChoice = event.key.toLowerCase();
        console.log(playerKeyChoice);
        //document.getElementById("outputArea").innerHTML = playerKeyChoice;
    }

    //Verify player entry
    //Compare player entry
    //  IF correct; generate another random number, update wins, set t back to 0, and begin again.
    if (playerKeyChoice === computerPick) {
        playerWins += 1;
        t = 0;

        console.log("Win Recorded! : ", playerWins);

    }
    //  IF no more guesses; generate another random number, update losses, set t back to 0, and begin again.
    if (t === numberOfTurns -1 ) {
        playerLosses += 1;
        t = 0;

        console.log("Loss Recorded! : ", playerLosses);

    }

    //Checking for turn counter to increment properly
    console.log("Turn Counter 't' = ", t);
}