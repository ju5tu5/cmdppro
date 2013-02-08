/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true*/
/*globals console*/

// Functie om de scope van dit script lokaal te houden
(function () {
  'use strict';

  // Helper functie om het boek te kunnen gebruiken
  var print = function () {
    var i;
    for (i = 0; i < arguments.length; i++) {
      console.log("(" + typeof (arguments[i]) + ") " + arguments[i]);
    }
  };

  // Hier onder jouw code
  // ------------------------------

  var voornaam = "Justus";
  var achternaam = "Sturkenboom";
  var leeftijd = 34;
  var naam = voornaam + " " + achternaam;

  print(naam, leeftijd);



  // ------------------------------

// Sluiten van de scope functie
}());