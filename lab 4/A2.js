//Create a program that joins "users", "arjun", "documents", "project" into a 
// single path using path.join().

const path = require('path');

const joined_path =  path.join('arjun','documents','project');
console.log("Joined path = ",joined_path);