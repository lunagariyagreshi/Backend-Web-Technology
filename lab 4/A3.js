/* Write a program to fix the path="//folder//subfolder////file.txt" using path.
// normalize() and display the clean normalised path.*/

const path = require('path');

const wrongpath = '//folder//subfolder////file.txt';

const cleanpath = path.normalize(wrongpath);
console.log("Wrong path = ",wrongpath);
console.log("clean path = ",cleanpath);