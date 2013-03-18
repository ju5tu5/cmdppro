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

    //console.log(window.document.body.childNodes[3].childNodes[1].innerHTML);

    //console.log(window.document.body.childNodes[2].childNodes[2].innerHTML);

    // Selecteer een HTML object en pas de innerHTML aan
    var alinea = window.document.body.childNodes[1].childNodes[1].childNodes[3];
    alinea.innerHTML = "Somebody set up us the bomb!";


};