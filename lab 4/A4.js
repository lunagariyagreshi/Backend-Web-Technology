//) Write a program that checks whether the given path is absolute or relative paths. 

const path = require('path');

const given_path = '\\folder\\subfolder\file.txt';

if(path.isAbsolute(given_path)){
    console.log("Absolute path");
}
else{
    console.log("Relative path");
}