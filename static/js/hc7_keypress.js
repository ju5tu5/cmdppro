/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';

    // selecteer invoerveld
    var invoerveld = document.forms.eenFormulier.elements.eenTekstveld;

    // event handler, toetsLogger, schrijft de karakters naar console
    var toetsLogger = function (event) {
        console.log("Charcode '" + event.charCode + "' komt overeen met toets '" + String.fromCharCode(event.charCode) + "'");
    };

    // deze functie zou je kunnen uitwerken tot iets wat echt een object bestuurd met de pijltjestoetsen
    var bestuur = function (event) {
        // Log eventueel de keycode naar de console
        // console.log(event.keyCode);
        switch (event.keyCode) {
        case 37:
            console.log("ga naar links");
            break;
        case 38:
            console.log("ga naar boven");
            break;
        case 39:
            console.log("ga naar beneden");
            break;
        case 40:
            console.log("ga naar rechts");
            break;
        }
    };

    // Voeg event handlers toe, elke keer wordt een object geselecteerd, een type event meegegeven en een handler functie aangeduid
    addHandler(invoerveld, "keypress", toetsLogger);
    addHandler(document.body, "keydown", bestuur);


};