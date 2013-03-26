/* Copyleft 2013, all wrongs reversed */
/* Bron: <urls van jouw bronnen> */
/*jslint browser: true, vars: true*/
/*globals console,confirm,prompt,alert,document,window*/

window.onload = function () {
    'use strict';

    // selecteer het formulier
    var formulier = document.forms.eenFormulier;
    // zet de focus op het eerste invoerveld
    formulier.elements.naam.focus();

    // functie toonFoutmelding
    var toonFoutmelding = function (melding) {
        document.getElementById('foutmelding').innerHTML = melding;
    };

    // functie hightLightInvoerveld
    var highLightInvoerveld = function (invoerveld) {
        invoerveld.className = "highlight";
        invoerveld.focus();
    };

    // controleer of 'waarde' een email adres is
    var isEmail = function (waarde) {
        return (/^.+@.+\.\w{2,4}$/.test(waarde));
    };

    // controleer of 'waarde' bestaat uit 8 cijfers 
    var isMobiel = function (waarde) {
        return (/^\d{8}$/.test(waarde));
    };

    // functie valideerFormulier
    var valideerFormulier = function (event) {
        console.log('valideer');
        var naamveld = document.forms.eenFormulier.elements.naam;
        var emailveld = document.forms.eenFormulier.elements.email;
        var mobielveld = document.forms.eenFormulier.elements.mobiel;
        if (naamveld.value === "") {
            event.preventDefault();
            toonFoutmelding("Voer een naam in alsjeblieft");
            highLightInvoerveld(naamveld);
            return;
        }
        if (!isMobiel(mobielveld.value)) {
            event.preventDefault();
            toonFoutmelding("Voer een nummer met 8 cijfers in alsjeblieft");
            highLightInvoerveld(mobielveld);
            return;

        }
        if (!isEmail(emailveld.value)) {
            event.preventDefault();
            toonFoutmelding("Voer een correct emailadres in alsjeblieft");
            highLightInvoerveld(emailveld);
            return;

        }
    };

    // wanneer de gebruiker op 'Verzenden' klikt, valideer het formulier
    addHandler(formulier, "submit", valideerFormulier);
};