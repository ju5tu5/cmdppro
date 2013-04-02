/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,addHandler*/

window.onload = function () {
    'use strict';

    // Variabele om de dungeon in in te laden
    var dungeon = {};
    var currentRoom = 0;

    // Vier variabelen die verwijzen naar HTML elementen
    var mud = document.forms.mud;   // formulier
    var story = mud.story;          // textarea
    var command = mud.command;      // input type=text
    var send = mud.send;            // input type=submit

    // Voeg gegevens aan het verhaal toe
    var addLineToStory = function (line) {
        story.value += line + "\n";
        story.scrollTop = story.scrollHeight;
    };

    // Maakt het commandoveld leeg
    var clearCommand = function () {
        command.value = "";
    };

    // Controleer of een functie bestaat
    var isFunction = function (test) {
        try {
            return typeof eval(test) === "function";
        } catch (error) {
            return false;
        }
    };

    // Roep een functie aan uit een string
    var runFunction = function (fn) {
        eval(fn)();
    };

    // Laad een extern JSON bestand in
    var loadDataFile = function (filename) {
        var xml = new XMLHttpRequest();
        xml.overrideMimeType("application/json");
        xml.open('GET', filename + '?' + new Date().getTime(), true);
        xml.onreadystatechange = function () {
            if (xml.readyState == 4) {
                buildDungeon(xml.responseText);
            }
        };
        xml.send(null);
    };

    // Bouw  de dungeon op a.d.h.v. een json string
    var buildDungeon = function (json) {
        dungeon = JSON.parse(json);
        enter(0);
    };

    // MUD FUNCTIONS

    // List all possible functions
    var help = function () {
        addLineToStory("help: geef dit overzicht weer!");
    };

    var getDirections = function () {
        addLineToStory("");
        addLineToStory("Mogelijke richtingen:");
        for (var exit in dungeon[currentRoom].exits) {
            addLineToStory(exit);
        }
    };

    var enter = function (room) {
        currentRoom = room;
        addLineToStory(dungeon[currentRoom].description);
        getDirections();
    };

    var generateTransferFunction = function (name) {
        return function () {
            var transferToDungeonCode = dungeon[currentRoom].exits[name];

            if (transferToDungeonCode !== undefined) {
                enter(transferToDungeonCode);
            } else {
                addLineToStory("Je rent hard tegen de muur op. Auw..");
                getDirections();
            }
        };
    };

    var north = generateTransferFunction('north');
    var east = generateTransferFunction('east');
    var south = generateTransferFunction('south');
    var west = generateTransferFunction('west');


    // Handel commando's af
    var sendCommand = function (event) {
        event.preventDefault();
        addLineToStory("> " + command.value);

        if (isFunction(command.value)) {
            runFunction(command.value);
        } else {
            addLineToStory("'" + command.value + "' is geen geldig commando, voer 'help' in om een lijst met commando's te bekijken.");
        }

        clearCommand();
    };

    // Voeg een handler toe om commando's te versturen
    addHandler(mud, "submit", sendCommand);

    // Laad de dungeon in
    loadDataFile('/static/js/awesomud.json');

    // Zet de focus op het invoerveld
    command.focus();
};