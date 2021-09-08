/* path module comes due to fight between steve jobes and bill gates    
Fight of forward slash "/"   and backward slash "\"  to make language platform independent*/
//  windows me \\ slash hota hai and linux,mac me // slash
let path=require("path")

for(let i=1;i<=10;i++){       
    let dirPathToMake =`Lecture-${i}`      
    fs.mkdirSync(dirPathToMake)           
    fs.writeFileSync(path.join(dirPathToMake+"\\"+"readme.md"),"# readme for ${dirPathToMake}")
} 
// here abobe a inbuild function is used ->path.join<- that takes path irrespective of os , solved problem  of slash
//and if a file has space in its name that is not allowed to have space in name of a file so that problem is also solved by path.join

let    extension = path.extname(path.join(__dirname,"abc.js")) // to print extension of a file
console.log("ext",extension)

let name =path.basename(__dirname) // return name of folder or file at that point ,at this  time it will print NODE JS
console.log(name) 

name =path.basename(path.join(__dirname,"abc.js"))
console.log(name) 




