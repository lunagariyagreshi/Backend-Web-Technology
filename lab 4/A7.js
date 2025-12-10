// total memory and free memory

const os = require('os');
function convertToGb(byte){
    return (byte/(1024*1024*1024)).toFixed(2);
}
console.log("Total memory :- ",convertToGb(os.totalmem()));
console.log("Free memory :- ",convertToGb(os.freemem()));