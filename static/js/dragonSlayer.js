/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true*/
/*globals console*/

(function () {
    'use strict';

    var slaying = true,
        youHit = Math.floor(Math.random() * 2),
        damageThisRound = Math.floor(Math.random() * 5 + 1),
        totalDamage = 0;

    while (slaying) {
        if (youHit) {
            console.log("You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;

            if (totalDamage >= 4) {
                console.log("You did it! You slew the dragon!");
                slaying = false;
            } else {
                youHit = Math.floor(Math.random() * 2);
            }

        } else {
            console.log("The dragon burninates you! You're toast.");
            slaying = false;
        }
    }

    // ------------------------------

// Sluiten van de scope functie
}());