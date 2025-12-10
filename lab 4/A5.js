/* Write a Node.js program that uses path.resolve() to convert "folder", "subfolder", "app.js" 
into an absolute path. Print the final resolved path.*/ 

const path = require('path');

const resolved_path = path.resolve("folder","subfolder","app.js");
console.log("Resolved path = ",resolved_path);