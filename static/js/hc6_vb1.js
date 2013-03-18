/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
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

    // Open een nieuwe window en laad google in
    var newWindow = window.open('about:blank');
    newWindow.document.location.href = "http://www.google.com";

    // Functie om de url te veranderen
    var veranderURL = function () {
        newWindow.document.location.href = "http://www.duckduckgo.com";
    };
    // Functie om een window element te sluiten
    var sluitWindow = function () {
        newWindow.close();
    };

    // Timeout verwacht twee parameters, de functie die moet worden aangeroepen en de tijd in miliseconden (1 sec = 1000)
    // window.setTimeout(veranderURL, 5000); // Dit werkt niet door een sandbox violation
    window.setTimeout(sluitWindow, 10000);

}());