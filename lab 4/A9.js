//how long the system has been running (uptime) in sec and hr

const os = require("os");

const sec = os.uptime();
const hour = (sec/3600).toFixed(2);

console.log("Sec = ",sec);
console.log("Hour :- ",hour);