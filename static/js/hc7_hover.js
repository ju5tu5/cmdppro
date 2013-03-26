/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';
    // maak variabelen
    var i, afbeelding, afbeeldingenLijst;

    // event handler, vergroot de afbeelding
    var vergroot = function (event) {
        console.log("hij doet het");
        event.target.className = "vergroot";
    };

    // event handler, verkleint de afbeelding weer
    var verklein = function (event) {
        event.target.className = "normaal";
    };


    // afbeelding = document.getElementById("afbeelding1");
    // luister naar wanneer de muis over de afbeelding hangt en voer functie vergroot uit
    // addHandler(afbeelding, "mouseover", vergroot);
    // addHandler(afbeelding, "mouseout", verklein);

    // haal alle afbeelding op en stop ze in een lijst
    afbeeldingenLijst = document.getElementsByTagName("img");
    // voor elke afbeelding
    for (i = 0; i < afbeeldingenLijst.length; i += 1) {
        // als de muis boven de afbeelding hangt, vergroot de afbeelding dan
        addHandler(afbeeldingenLijst[i], "mouseover", vergroot);
        // als de muis van de afbeelding af gaat, verklein hem dan weer
        addHandler(afbeeldingenLijst[i], "mouseout", verklein);
    }

};