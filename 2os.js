// os is a inbuilt module of node.js  .there are several modules in node.js
// to connect with operating system  we require os module
let os= require("os"); // require here means to get/acquire something
console.log(os.arch()) // this arch() method give architecture of our system like x64 bit etc

console.log(os.platform()) // this platform() method gives type of platform win 32 means windows machine etc

console.log(os.networkInterfaces())  // this method give all data of connected network like wifi

console.log(os.cpus()) // this method check load on operating system/server so that it not crashes






