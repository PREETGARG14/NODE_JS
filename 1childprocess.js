// child_process is a inbuilt module of node.js  .there are several modules in node.js
// node.js is that help in interact from backend via language javascript
// node.js=android phone     
// node.js modules are apps
//javascript = language by which we can intract with phone/any app
let cp= require("child_process");  // require here means to get/acquire something
console.log("opening a app")
cp.execSync("calc");  // this line open calculator
console.log("opened")

cp.execSync("code"); // this line open vs code  

cp.execSync("start chrome https:\\www.pepcoding.com")  // use start keyword to open website of pepcoding
let get_abc_file =cp.execSync("node abc.js")  /* here we call another file 
written in any language from outside and run that file*/
console.log("here we run abc.js "+get_abc_file)