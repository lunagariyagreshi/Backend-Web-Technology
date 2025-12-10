//number of cpu cores , model name of each , network interface

const os = require('os');

const cpus = os.cpus();
console.log(cpus);
console.log("Number of cpu cores :- ",cpus.length);

cpus.forEach((core,index)=>{
    console.log(`Core  ${index+1}  Model : `,core.mode1);
});

const network = os.networkInterfaces();
console.log("Network interfaces : ");
console.log(network);