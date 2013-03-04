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

    // var naam = "Justus";
    // console.log(naam);

    // naam = "Walter";
    // console.log(naam);

    // naam = "Andre";
    // console.log(naam);

    // naam = "Laura";
    // console.log(naam);

    // naam = "Sonja";
    // console.log(naam);

    // var zegHallo = function () {
    //     console.log("Hallo wereld");
    // };

    // zegHallo();
    // zegHallo();
    // zegHallo();
    // zegHallo();
    // zegHallo();

    // var naam = "Justus";

    // var toonNaam = function () {
    //     var naam = "Isolde";
    //     console.log(naam);
    // };

    // toonNaam();
    
    // console.log(naam);


    // var getalEen = 5;

    // var optellen = function () {
    //     var getalEen = 6;
    //     console.log(getalEen + 3);
    // };

    // console.log(getalEen + 3);

    // optellen();

    // console.log(getalEen + 3);


    // var toonNaam = function (naam) {
    //     console.log(naam);
    // };

    // toonNaam("Justus");

    // toonNaam("Isolde");


    // var begroet = function (naam) {
    //     return "Halloow " + naam + ", hoe gaat het ermee? Hier is alles goed...";
    // };

    // console.log( begroet("Justus") );

    // var optellen = function (getalEen, getalTwee) {
    //     return getalEen + getalTwee;
    // };

    // console.log( optellen(2, 3) );

    // var som = optellen(15, 9876543567890);

    // console.log(som);


    // var maakMeme = function(onderwerp) {
    //     return function (voorwerp) {
    //         console.log("I heard you like "+ onderwerp +"! So we put a "+ voorwerp +" in your "+ onderwerp +" so you can "+ voorwerp + " while you " + onderwerp + ".");
    //     };
    // };

    // var programmerenMeme = maakMeme("Programmeren");

    // programmerenMeme("Functie");


    // var input = prompt("Whatever?", "Something");
    // console.log("TEst: "  + (input || "slaolie") );

    var power = function (base, exponent) {
        var count, result = 1;

        for (count = 0; count < exponent; count += 1) {
            result *= base;
        }
        return result;
    };

    console.log( power(2, 5) );

    console.log(result);

    // ------------------------------

// Sluiten van de scope functie
}());