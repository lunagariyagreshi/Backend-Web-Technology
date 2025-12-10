// Write a program that parses the given URL, Print protocol, hostname, pathname, and query 
//parameters separately.

const url = require('url');
const path = "https://example.com:8090?fn='arjun'&ln='bala'";

// parse convert path into object
const parse = url.parse(path,true);

console.log("path = ",path);
console.log("Protocol :- ",parse.protocol);
console.log("Host name :- ",parse.hostname);
console.log("Path name :- ",parse.pathname);
console.log("Query parameter :- ",parse.query);
console.log("Port number :- ",parse.port);