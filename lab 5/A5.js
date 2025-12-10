// Create a new URL object with base, then append pathname and query, also print the final 
//URL. 

const URL = require("url");

const myUrl = new URL("https://example.com:8090");

// appends a path after url + port number
myUrl.pathname = '/product/item';
// add key-value pair as query parameter
myUrl.searchParams.append("id","101");
myUrl.searchParams.append("name","arjun");

console.log(myUrl);
console.log(myUrl.toString());
