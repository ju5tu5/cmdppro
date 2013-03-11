/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true*/
/*globals console*/

(function () {
    'use strict';

    // Helper functie om het boek te kunnen gebruiken
    var print = function () {
        var i;
        for (i = 0; i < arguments.length; i += 1) {
            console.log("<" + typeof (arguments[i]) + "> " + arguments[i]);
        }
    };

    // Hier onder jouw code
    // ------------------------------

    //Check if the user is ready to play!
    confirm('Are you ready to play?');

    var age = prompt("What's your age?");

    if(age < 18){
        console.log("You are allowed to play but we won't take responsibility.");
    }else{
        console.log("Play on! Play it!");
    }

    console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
    console.log("Batman glares at you.");

    var userAnswer = prompt("Are you feeling lucky, punk?");

    if(userAnswer === 'yes'){
        console.log("Batman hits you very hard. It's BAtman and you're you! Of course Batman wins!");
    }else{
        console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman."); 
    }

    var feedback = prompt("Please rate my game? [1-10]");

    if(feedback>8){
        console.log("This is just the beginning of my game empire. Stay tuned for more!");
    }else{
        console.log("I slaved away at this game and you gave me that score?! The nerve! Just you wait!");
    }

    // ------------------------------

// Sluiten van de scope functie
}());