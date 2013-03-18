/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console*/

window.onload = function () {
    'use strict';

    // Selecteer de header
    var header = document.getElementById('header');
    // Maak een nieuwe div
    var output = document.createElement("div");

    // Alle parameters worden voorzien van datatype doorgestuurd naar console.log()
    var print = function () {
        var i;
        for (i = 0; i < arguments.length; i += 1) {
           output.innerHTML += "<p>&lt;" + typeof (arguments[i]) + "&gt; " + arguments[i] + "</p>";
        }
    };

    // DEFACING!!!
    //document.body.innerHTML = '<center style="color:red;font-size:40px">DEFACED!!!!1ononeoneone!!!11111eleventyone</center>';

    //var instructie = document.getElementById('instructie');
    //instructie.innerHTML = "dat is wel een stukje sneller (als ik geen typo's maak)!";

    // Voeg een id toe aan de div
    output.setAttribute("id", "output");
    // Voeg de div toe aan de header
    header.appendChild(output);

    // Stuur een bericht naar de functie print
    print("Wow dit is tof!");
    print("Wow dit is tof!");
    print("Wow dit is tof!");
    print(42);
    print("Dit is dus wel de ultieme controle he!?");
};