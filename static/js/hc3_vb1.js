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

//     var voorbeeldArray = [1, 2];
//     var array = new Array();

//     var starWarsFilms = [1, "twee", 3<4, 5, 6];
//    // console.log(starWarsFilms[0]);
//     starWarsFilms[starWarsFilms.length] = 7;

//     console.log(starWarsFilms);
//     starWarsFilms[7] = 676485;
//      starWarsFilms.pop(676485)
// ;    starWarsFilms.push("nieuwe waarde")
//     starWarsFilms.unshift

    // var rijKassa = ["Tinneke", "Jan", "Sjoerd"];
    // rijKassa.push("Andre");
    // console.log(rijKassa);
    // console.log("De volgende is " + rijKasse.shift());
    // console.log(rijKasse);
    // //starWarsFilms[100] = "eenhonderd";

    // var huiswerk = ["prgrammeren", "andere niet zo belangrijke dingen"];
    // huiswerk.push("marketing");
    // huiswerk.pop();

    // var progDocenten = ["Justus", "Walter", "Laura", "Sonja", "Andre"];

    // for (var i=0; i<progDocenten.length; i++) {
    //     console.log(progDocenten[i]);
    // }

    // var tweeDArray = [[1, 2, 3], [4, 5, 6]];
    // console.log(tweeDArray[1][1]);

    var katten = {};
    //var katten = new Object();
    katten.naam = "Akira";
    katten.leeftijd = 1;

    var vakken = {};
    vakken.prog = {
        vakNaam: "Programmeren",
        docentNaam: "Andre",
        moeilijk: true,
        saaiheid: 6
    }
    vakken.mark = {
        vakNaam: "Marketing",
        docentNaam: "Jos",
        moeilijk: false,
        saaiheid: 1
    }

    //console.log(vakken.prog.moeilijk);

    for (var key in vakken) {
        var vak = vakken[key];
        print(vak.vakNaam + " wordt gegeven door " + vak.docentNaam)
    }

    var objectArray = {0: "een string", 1: 1234, 2: 3<4};
    Math.random
    string.length

    // ------------------------------

// Sluiten van de scope functie
}());