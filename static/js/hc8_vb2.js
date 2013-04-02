/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console*/

window.onload = function () {
    'use strict';

    var keuzemogelijkheden = [
        {
            "naam": "rots",
            "overtroeft": ["schaar"]
        },
        {
            "naam": "papier",
            "overtroeft": ["rots"]
        },
        {
            "naam": "schaar",
            "overtroeft": ["papier"]
        }
    ];

    var rots = document.getElementById('rots');
    var papier = document.getElementById('papier');
    var schaar = document.getElementById('schaar');

    String.prototype.ucfirst = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    var toonBoodschap = function (tekst) {
        var berichtvenster = document.getElementById('berichtvenster');
        berichtvenster.innerHTML += "<p>" + tekst + "</p>\n";
    };

    var vergelijk = function (keuze1, keuze2) {
        var filterOpKeuze1 = function (keuze) {
            return keuze.naam === keuze1;
        };
        var overtroeft = keuzemogelijkheden.filter(filterOpKeuze1)[0].overtroeft;

        if (keuze1 === keuze2) {
            return -2;
        }
        return overtroeft.indexOf(keuze2);
    };

    var spelen = function (event) {
        var gebruikerKeuze = event.toElement.id;
        var computerKeuze = keuzemogelijkheden[Math.floor(Math.random() * keuzemogelijkheden.length)].naam;
        var uitslag = vergelijk(gebruikerKeuze, computerKeuze);

        switch (uitslag) {
        case -2:
            toonBoodschap("Gelijkspel, probeer het nog eens.");
            break;
        case -1:
            toonBoodschap(gebruikerKeuze.ucfirst() + " verliest van " + computerKeuze.ucfirst()  + ". Helaas je hebt verloren, probeer het nog eens!");
            break;
        default:
            toonBoodschap(gebruikerKeuze.ucfirst() + " wint van " + computerKeuze.ucfirst() + ". Gefeliciteerd, probeer het nog eens!");
        }
    };

    addHandler(rots, "click", spelen);
    addHandler(papier, "click", spelen);
    addHandler(schaar, "click", spelen);

    var boodschap = "Klik op ";
    for (var i = 0; i < keuzemogelijkheden.length; i += 1) {
        if(i === keuzemogelijkheden.length - 1){
            boodschap += " of ";
        } else if (i !== 0) {
            boodschap += ", ";
        }
        boodschap += keuzemogelijkheden[i].naam;
    }
    boodschap += " om het spel tegen de computer te spelen!";
    toonBoodschap(boodschap);

};