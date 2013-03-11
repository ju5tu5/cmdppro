/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true*/
/*globals console*/

(function () {
    'use strict';

    // Alle parameters worden voorzien van datatype doorgestuurd naar console.log()
    var print = function () {
        var i;
        for (i = 0; i < arguments.length; i += 1) {
            console.log("<" + typeof (arguments[i]) + "> " + arguments[i]);
        }
    };

    // var borg = {};
    // borg.speak = function (line) {
    //     print("The borg says '" + line + "'");
    // };

    // borg.speak("Resistance is futile, you will be assimilated.");

    // var speak = function (line) {
    //     print("Borg " + this.identification + " says '" + line + "'");
    // };

    // var firstBorg = {
    //     identification: 1234,
    //     speak: speak
    // };
    // var secondBorg = {
    //     identification: 1235,
    //     speak: speak
    // };

    // firstBorg.speak("Resistance is futile, you will be assimilated.");
    // secondBorg.speak("Resistance is futile, you will be assimilated.");

    var Borg = function (identification) {
        this.identification = identification;
        this.speak = function (line) {
            print("Borg " + this.identification + " says '" + line + "'");
        };
    };

    var thirdBorg = new Borg(1236);
    thirdBorg.speak("You will be assimilated.");

    var fourthBorg = new Borg(1237);

    Borg.prototype.selfdestruct = function () {
        print("Borg " + this.identification + " will selfdestruct in five seconds. You have no chance to survive gentlemen, make your time.");
    };

    thirdBorg.selfdestruct();
    fourthBorg.selfdestruct();

    Array.prototype.dance = function () {

    };

// Sluiten van de scope functie
}());