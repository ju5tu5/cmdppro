/* Copyleft 2013, all wrongs reversed */
/*jslint browser: true, vars: true*/
/*globals console,prompt*/

window.onload = function () {
    'use strict';

    var myImage = document.getElementById('myImage');

    var changeImage = function (event) {
        myImage.src = "static/image/scissors.jpg";
    };
    var changeBack = function (event) {
        myImage.src = "static/image/rock.jpg";
    };

    addHandler(myImage, "mouseover", changeImage);
    addHandler(myImage, "mouseout", changeBack);
};