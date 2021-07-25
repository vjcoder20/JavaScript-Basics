// //****************************  file      ************************************ */
// implementattion -> files/folder interact
// directory
// files -> read/write/update/delete
let fs = require("fs");
// let content = fs.readFileSync("f1.txt");
// console.log("content: "+content);
// //conconate converts string to text
// // console.log("content: ",content);   In this some buffer would print
// //buffer is audio , video , text
// fs.writeFileSync("abc.txt", "I love nodejs");
// // write -> writeFileSync
// // file doesn't exist -> it will create a new file, put a new content too
// // file exist -> it will oveeride the content
// fs.appendFileSync("abc.txt", " And javaScript");
// //add content in last
// fs.unlinkSync("abc.txt");
// // Removed or unlinked file
// console.log("File Removed");

//****************************  Directory/Folder      ************************************ */
// fs.mkdirSync("MyDirectory");
// create directory
// fs.rmdirSync("MyDirectory");
//remove directory

// // path -> check path does exist or not
// let doesexist = fs.existsSync("f1.txt");
// console.log("This Path exist?", doesexist);

// // path-> belongs to a directory or path
// let statsOfPath = fs.lstatSync("f1.txt");
// console.log(statsOfPath);
// console.log("Is File?", statsOfPath.isFile());
// console.log("Is Directory?", statsOfPath.isDirectory());

//directory -> content
// let address = "F:\\Web Development PepCoding\\JavaScript-Basics\\PepDev-1";
// let content = fs.readdirSync(address);
// console.log("directory content",content);
/* F:\Web Development PepCoding\JavaScript-Basics\PepDev-1 -> Directory Path*/
/* F:\Web Development PepCoding\JavaScript-Basics\PepDev-1\lec4.js -> File Path */