"use strict";

let callname = prompt ("please state your name");

let greet = `Hello `;

let result = greet + callname;

document.getElementById('greeting').innerHTML= result;

console.log(callname);