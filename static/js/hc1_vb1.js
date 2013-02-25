/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true*/
/*globals console,prompt*/

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


    // var naam = prompt("Hoe heet jij?");

    // if (naam === "Justus") {
    //   console.log("Whoaaa, de docent heeft ingelogd...");
    // }

    var budget = prompt("Hoeveel geld heb je bij je?");

    if (budget > 24) {
        console.log("Wow, jij bent rijk!");
    } else if (budget < 3) {
        console.log("Dat wordt lunch bietsen...");
    } else {
        console.log("Goh dan heb jij het gemiddeld genomen wel oke...");
    }


    // ------------------------------

// Sluiten van de scope functie
}());