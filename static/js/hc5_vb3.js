/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console*/

// Maak een auto-aangeroepen functie met een eigen scope om alles af te schermen van de global scope
(function () {
    'use strict';
    // Uitbreiding op de abstracte foreach functie uit vb1 welke geschikt is gemaakt voor het (door)loopen van objecten
    var forEachIn = function (object, action) {
        var property; // placeholder
        for (property in object) {
            if (object.hasOwnProperty(property)) {
                action(property, object[property]);
            }
        }
    };

    // Functie provide verwacht als parameter een object met zaken die in de algemene scope beschikbaar moeten worden
    var provide = function (values) {
        forEachIn(values, function (name, value) {
            window[name] = value;
        });
    };

    var foo = function () {
        console.log("Het werkt, je bent uit de scope gebroken!");
    };

    // Zorg er voor dat de functie foo ook buiten de scope te gebruiken is
    provide({
        foo: foo
    });

}());


// Roep buiten de scope de functie aan om het principe te testen, zonder 
// provide kan de functie hier dus niet aangeroepen worden!
foo();