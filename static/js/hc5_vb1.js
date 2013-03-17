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

    // Maak drie variabelen, i wordt verderop in de for-loops gebruikt en getallen en breuken worden in de voorbeelden gebruikt.
    var i,
        getallen = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55],
        breuken = [0.01, 2.3, 9.89, Math.PI];

    // Voorbeeld 1: een eenvoudige for-loop waarin de getallen in de console geprint worden
    // for(i = 0; i < getallen.length; i += 1){
    //     print(getallen[i]);
    // }

    // Voorbeeld 2: Dezelfde for-loop maar nu opgenomen in een functie
    // var printArray = function (array) {
    //     for(var i = 0; i < array.length; i += 1){
    //         print(array[i]);
    //     }
    // };

    // Voorbeeld 3: een functie die action (een andere functie) over een array heen haalt
    // BOUWBLOK: deze foreach wordt in zowel reduce als map gebruikt!
    var foreach = function (array, action) {
        for (i = 0; i < array.length; i += 1) {
            action(array[i]);
        }
    };

    // Aanroep van de foreach functie met getallen als array en print als action
    // foreach(getallen, print);

    // Voorbeeld 4: Een functie die alle getallen in een array bij elkaar op telt
    // var sum = function (array) {
    //     var total = 0;
    //     // Eenvoudige implementatie van de functie met een for-loop
    //     // for(var i = 0; i < array.length; i += 1) {
    //     //     total = total + array[i];
    //     // }
    //     // Interne functie die meegegeven kan worden aan foreach in plaats van de literal-function die er nu staat
    //     // var optellen = function (number) {
    //     //     total += number;
    //     // };
    //
    //     // Aanroep van de foreach met de als parameter meegegeven array en een literal-function (kan vervangen worden door optellen)
    //     foreach(array, function (element) {
    //         total += element;
    //     });
    //     return total;
    // };

    // Aanroep van de functie sum met getallen als array, het resultaat wordt naar de functie print gestuurd
    //print(sum(getallen));

    // Voorbeeld 5: Reduce abstraheert de werking van sum, de naam reduce slaat op het reduceren van een
    // serie waarden in een array tot een enkele waarde. De functie wordt ook wel eens fold genoemd.
    // Combine is de functie die over array heen wordt gehaald, het resultaat wordt tussentijds opgeslagen in base.
    var reduce = function (combine, base, array) {
        foreach(array, function (element) {
            base = combine(base, element);
        });
        return base;
    };

    // Hulpfunctie optellen welke de gewenste combine-actie voor de reduce functie uitvoert
    var optellen = function (a, b) {
        return a + b;
    };

    // Nieuwe implementatie van sum waarbij gebruik gemaakt wordt van reduce en de optellen hulp functie
    var sum = function (array) {
        return reduce(optellen, 0, array);
    };

    // Aanroep van de nieuwe sum functie met getallen als array, het resultaat wordt weer naar de functie print gestuurd
    print(sum(getallen));

    // Voorbeeld 6: Map voert een functie uit voor elk element in een array en geeft het resultaat van die
    // bewerking terug (return) als nieuwe array (result) welke met array.push() wordt gevuld.
    var map = function (func, array) {
        var result = [];
        foreach(array, function (element) {
            result.push(func(element));
        });
        return result;
    };

    // Aanroep van de nieuwe map functie met Math.floor als bewerking en de rij breuken als array.
    var afgerondeBreuken = map(Math.floor, breuken);

    console.log(breuken);
    console.log(afgerondeBreuken);

// Sluiten van de scope functie
}());