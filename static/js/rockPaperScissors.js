/* Copyleft 2013, all wrongs reversed */
/*globals console,prompt*/

(function () {
    "use strict";

    var possibleChoices = ["rock", "paper", "scissors"],
        userChoice = prompt("Do you choose rock, paper or scissors?"),
        computerChoice = possibleChoices[Math.floor(3 * Math.random(), 0)],

        runRockPaperScissors = function (playerOneChoice, playerTwoChoice) {
            var outcome = (playerOneChoice === playerTwoChoice) ? "the result is a tie" : null;

            switch (playerOneChoice) {
            case "rock":
                outcome = (playerTwoChoice === "paper") ? "paper wins" : "rock wins";
                break;
            case "paper":
                outcome = (playerTwoChoice === "scissors") ? "scissors wins" : "paper wins";
                break;
            case "scissors":
                outcome = (playerTwoChoice === "rock") ? "rock wins" : "scissors wins";
                break;
            }
            return outcome;
        };

    console.log("You chose " + userChoice + " and the computer chose " + computerChoice + ": " + runRockPaperScissors(userChoice, computerChoice));
}());