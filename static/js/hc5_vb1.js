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

    var i, getallen = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

    // for(i = 0; i < getallen.length; i += 1){
    //     print(getallen[i]);
    // }

    // var printArray = function (array) {
    //     for(var i = 0; i < array.length; i += 1){
    //         print(array[i]);
    //     }
    // };

    var foreach = function (array, action) {
        for(var i = 0; i < array.length; i += 1){
            action(array[i]);
        }
    };

    // foreach(getallen, print);

    // var sum = function (array) {
    //     var total = 0;
    //     // for(var i = 0; i < array.length; i += 1) {
    //     //     total = total + array[i];
    //     // }
    //     // var optellen = function (number) {
    //     //     total += number;
    //     // };
    //     foreach(array, function (element) {
    //         total += element;
    //     });
    //     return total;
    // };

    //print(sum(getallen));

    var reduce = function (combine, base, array) {
        foreach(array, function (element){
            base = combine(base, element);
        });
        return base;
    };

    var optellen = function (a, b) {
        return a + b;
    };

    var sum = function(array) {
        return reduce(optellen, 0, array);
    };

    print(sum(getallen));

    var map = function (func, array) {
        var result = [];
        foreach(array, function(element){
            result.push(func(element));
        });
        return result;
    };

    var breuken = [0.01, 2.3, 9.89, Math.PI];
    var afgerondeBreuken = map(Math.floor, breuken);

    console.log(breuken);
    console.log(afgerondeBreuken);

// Sluiten van de scope functie
}());