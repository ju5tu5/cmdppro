/*

Jouw bronvermelding:
-  www.wtfjs.com

Copyleft 2013, all wrongs reversed



*/
/*jslint browser: true, vars: true*/
/*globals console,prompt*/

window.onload = function () {
    'use strict';

    var toonBoodschap = function (tekst) {
        var berichtvenster = document.getElementById('berichtvenster');
        berichtvenster.innerHTML += "<p>" + tekst + "</p>\n";
    };

    var controleerLeeftijd = function (leeftijd) {
        if (leeftijd < 18) {
            toonBoodschap("Je mag het spel spelen maar wij nemen geen verantwoordelijkheid.");
        } else {
            toonBoodschap("Leuk dat je het spel wilt spelen!");
        }
    };

    var speler = {};
    speler.naam = prompt('Wat is jouw naam?');

    toonBoodschap('Hallo ' + speler.naam + '!');

    speler.leeftijd = prompt('Wat is je leeftijd?');

    controleerLeeftijd(speler.leeftijd);

    toonBoodschap("Sneeuwwitje en Batman hangen bij de bushalte om naar de winkel te gaan, want je weet zelf, het leven van een superheld en sprookjesprinses gaan nou eenmaal niet over rozen, weet je hoeveel kleding dat kost. Stiekem ben je verliefd op sneeuwwitje - wie niet trouwens - en heb je een gruwelijke hekel aan Batman, pretentieus vleermuispatsertje. Er is overigens zoizo niets wat het is om een vleermuis te zijn (Thomas Nagel) dus... Je loopt naar Batman toe.");
    toonBoodschap("Batman kijkt boos naar je en vraag of hij iets van je aan heeft.");

    speler.antwoord = prompt("Nou, heb ik iets van je aan? Of wat?");

    if (speler.antwoord === 'ja') {
        toonBoodschap("Batman slaat je erg hard, wat een aggresieve mongool. Logischerwijs blaas je de aftocht en laat sneeuwitje bij die eikel. Ach, ze heeft toch last van narcolepsie.");
    } else if (speler.antwoord === 'je moeder') {
        toonBoodschap("Batman begint te huilen en sneeuwitje komt op je af en geeft je een doodklap. Patjepe&euml;er, zegt ze, zijn moeder is net ontvoerd door de grappenmaker. Kan je wel...");
    } else {
        toonBoodschap("Je zei geen ja, Batman heeft niets van je aan. Dit is de enig juiste keuze, je bent winnaar in het spel niet in elkaar gemept te worden. Gefeliciteerd!");
    }

    speler.feedback = prompt("Hoe zou je dit spel beoordelen? [1-10]");

    if (speler.feedback > 8) {
        toonBoodschap("Dit is pas het begin van mijn spel-emperium. Houd deze pagina in de gaten voor meer van dit soort lamlendige onzin!");
    } else {
        toonBoodschap("Ik heb toch zeker 10 minuten van mijn tijd geinvesteerd om jou dit spel te presenteren. Wacht maar...");
    }
};