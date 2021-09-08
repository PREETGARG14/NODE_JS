// npm is like play store ,npm has thousand of modules like 4 modules we have already learnt
/* through npm we can install various libraries by ->nmp i chalk<- this type of command ,
here chalk module is installed to get colorful Command line output */
// we also install another module to get large size text at console output ->npm i figlet<-  library


/* READ CHALK MODULE FROM HERE IF WANT ->https://www.npmjs.com/package/chalk  */
/* READ CHALK MODULE FROM HERE IF WANT ->https://www.npmjs.com/package/figlet */

let chalk = require('chalk');

console.log(chalk.blue('Hello world!')); // print blue output
console.log(chalk.bold('Hello world!')); // print bold output
console.log(chalk.underline('Hello world!')); // print underline output
console.log(chalk.green('Hello world!'));  // print green output
console.log(chalk.bgBlueBright('Hello world!')); // set output background bright blue

let figlet = require('figlet');
console.log(chalk.redBright(figlet.textSync(" #  Sonam Mintoo Loves Rashmi  ")))


