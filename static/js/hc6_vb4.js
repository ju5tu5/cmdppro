/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console*/

window.onload = function () {
    'use strict';

    // Alle parameters worden voorzien van datatype doorgestuurd naar console.log()
    var print = function () {
        var i;
        for (i = 0; i < arguments.length; i += 1) {
            console.log("<" + typeof (arguments[i]) + "> " + arguments[i]);
        }
    };

    // Selecteer de header en pas wat style elementen aan
    var header = document.getElementById("header");
    header.style.background = "red";
    header.style.width = "300px";
    header.style.display = "none";

    // Selecteer de body
    var body = document.body;
    // Stel een hoek in (2*pi is een volledige cirkel)
    var angle = 0;

    // Stel een intervalfunctie in die om de 100ms de hoek ophoogt en de positie op een elipse op het scherm uitrekent
    setInterval(function () {
        angle += 0.1;
        body.style.backgroundPosition = (400 + Math.cos(angle) * 400) + "px " + (200 + Math.sin(angle) * 200) + "px";
    }, 100);
};