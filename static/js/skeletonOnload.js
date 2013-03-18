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

    // Jouw code komt hier onder

};