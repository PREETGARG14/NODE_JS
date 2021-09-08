// fileSystem is a inbuilt module of node.js  .there are several modules in node.js
//how to read file
let fs=require("fs");

let data=fs.readFileSync("abc.js")  // to read whole file exact , not run this file only read
console.log(data+"") // by this we get exact all file data
// we do concat with string bz if only pass data then it will print buffer
//so we concatination with string  as string type superimpose buffer type

//files -> create,read,update,delete method
//how to create file
fs.openSync("abc.txt","w"); // this create empty file with writting mode
fs.writeFileSync("abc.txt","hum aaj bahut kush hai") // if we check file of abc.txt then see that file

/*writeFileSync -> if file not exist ->create file     & if file exist -> replace content
 writefilesync above has a problem that it replaces oldder data if we write in file again */


 //update file
 fs.appendFileSync("abc.txt","   kya reason ahi kush hone ka") // add at last of file


                      /*  NOW WE TALK ABOUT FOLDER MANAGEMENT ,TILL NOW WE LEARNT FILE SYSTEM    */



fs.mkdirSync("meriDirectory") // to  create new folder directory
fs.writeFileSync("meriDirectory/merifile.txt","mera content")
/* here in above line  we create a file named merifile.txt in meriDirectory folder with content as mera content */

let content = fs.readdirSync("meriDirectory")
// get list of all files of directory

console.log(content); // here value of content is no of files in meridirectory folder

for (let i =0 ;i<content.length;i++)
{
   console.log("file  ",content[i]," is removed" );
   fs.unlinkSync("meriDirectory/"+ content[i]) ; // unlink is used to delte files of a folder
}
fs.rmdirSync("meriDirectory")  //to remove folder meridirectory


let doespathexist = fs.existsSync("abc.txt") // if a file exist at a path then True else False
console.log(doespathexist)   // return true

doespathexist = fs.existsSync("abcd.txt") // if a file exist at a path then True else False
console.log(doespathexist) // no such file exist so return false

let details= fs.lstatSync(__dirname+"\\filesystem.js")  // ye batata hai ki jo path humne pass kia hai vo folder ka hai ya file ka
let ans = details.isFile()     // returns true bz filesystem.js is a file 
console.log(ans)

ans=details.isDirectory()  // return false
console.log(ans)


/* BELOW CODE WILL CREATE 10 FOLDER AND EACH FOLDER HAS a FILE NAMED readme.md*/ 
for(let i=1;i<=10;i++){       
   let dirPathToMake =`Lecture-${i}`      //to crreaate folder name
   fs.mkdirSync(dirPathToMake)            // mkdir is used to create folder
   fs.writeFileSync(dirPathToMake+"\\"+"readme.md","# readme for ${dirPathToMake}")  // write filesync used to create file and also write in it
}

