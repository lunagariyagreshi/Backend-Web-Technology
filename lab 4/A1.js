/* Write a Node.js program that prints the directory name, file name, file 
extension, and full path of the code file.*/
// __ IS SPECIAL GLOBAL VARIABLE

const path = require('path');

console.log("Directory name :- ",path.dirname(__dirname));
console.log("File name :- ",path.basename(__filename));
console.log("File extention :- ",path.extname(__filename));
console.log("Full path of code file :- ",__filename);