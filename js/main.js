'use strict';

let doc = document;

doc.body.addEventListener('keypress', function (e) {
    e.preventDefault();

    let letterCode = e.keyCode || e.which,
        newLetter = doc.createElement('div'),
        wrapper = doc.querySelector('.wrapper');

    if ((letterCode > 64 && letterCode < 91) || (letterCode > 96 && letterCode < 123) || (letterCode > 1039 && letterCode < 1104)){
        newLetter.textContent = String.fromCharCode(letterCode);
        newLetter.className = 'fadeIn';
        wrapper.appendChild(newLetter);
    };

});
