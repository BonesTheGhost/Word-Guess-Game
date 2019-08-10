/*Setting up the array for the computer choices and testing to make sure it works properly*/
//Javascript href link test
console.log("I'm working!");

// ***** VARIABLES *****
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerLetter = "";

var playerKeyChoice = "";

var numberOfTurns = 9;
var turn = 0;
var keyTest = false;

var playerWins = 0;
var playerLosses = 0;

/*
document.getElementById("winsArea").innerHTML += playerWins;
document.getElementById("lossesArea").innerHTML += playerLosses;
*/

// ***** Computer chooses a letter *****
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

    computerLetter = computerPick;
};

function initializeScore() {
    document.getElementById("winsArea").innerHTML = playerWins;
    document.getElementById("lossesArea").innerHTML = playerLosses;
}

//Optional PlayerKeyTest
function checkPlayerKey() {
    keyTest = computerChoices.includes(playerKeyChoice);
    console.log(keyTest);
}


//Run the computer choice generation for the first time.
computerGeneration();
initializeScore();




//Player entry.
document.onkeyup = function logKey() {
    playerKeyChoice = event.key.toLowerCase();
    console.log(playerKeyChoice);
    document.getElementById("outputArea").innerHTML += playerKeyChoice;


    checkPlayerKey();

    if (keyTest) {
        //Win Condition
        if (playerKeyChoice === computerLetter) {
            playerWins += 1;
            turn = 1;

            console.log("Win Recorded! : ", playerWins);

            //Clearing the choice log
            document.getElementById("outputArea").innerHTML = "";

            //Update the wins area
            document.getElementById("winsArea").innerHTML = playerWins;

            //Re-run the random letter choice for the computer
            computerGeneration();
        }
        else if (turn === numberOfTurns) {
            playerLosses += 1;
            turn = 1;

            console.log("Loss Recorded! : ", playerLosses);

            //Clearing the choice log
            document.getElementById("outputArea").innerHTML = "";

            //update the losses area
            document.getElementById("lossesArea").innerHTML = playerLosses;

            //Re-run the random letter choice for the computer
            computerGeneration();
        }
        else {
            turn += 1;
        }
    }
    else {
        alert("You must use letters; A - Z!");
    }

    console.log("Turn= ", turn);


}

