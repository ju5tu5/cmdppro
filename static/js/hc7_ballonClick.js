/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';
    var ballon, beweegBallonBijClick;

    // selecteer ballon
    ballon = document.getElementById("ballon");

    var beweegBallon = function (event) {
        // angle wordt gebruikt om een mooie vloeiende beweging te krijgen met de sinus functie verderop
        var angle = 0;
        // rangeX is hoe ver de ballon uitwijkt, dit wordt steeds kleiner
        var rangeX = 200;
        // Stel een intervalfunctie in die om de 100ms de ballon verplaatst
        setInterval(function () {
            // verander hoek
            angle += 0.3;
            // als de ballon nog niet gestopt is met bewegen
            if (rangeX > 0) {
                // verklein rangeX
                rangeX -= 4;
            } else {
                // stop de interval functie
                window.clearInterval();
                // stop luisteren naar clicks
                removeHandler(beweegBallonBijClick);
            }
            // verplaats de ballon een klein beetje
            ballon.style.top = ((rangeX - Math.sin(angle) * rangeX) - 18) + "px";
        // de interval is 100 miliseconden
        }, 100);

    };

    // wanneer de gebruiker op de ballon klikt, gaat de ballon bewegen
    beweegBallonBijClick = addHandler(ballon, "click", beweegBallon);

};