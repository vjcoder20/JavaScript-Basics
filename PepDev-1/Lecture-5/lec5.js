let fs = require("fs");
let path = require("path");
// // const { extname } = require("path/posix");
// // let srcFile = "F:\\Web Development PepCoding\\JavaScript-Basics\\PepDev-1\\f1.txt";
// // let destDir = "F:\\Web Development PepCoding\\JavaScript-Basics\\PepDev-1\\dir";
// let tobecopied = path.basename(srcFile);
// // return last path of the copied
// let destFile = path.join(destDir,tobecopied);
// fs.copyFileSync(srcFile,destFile);
// //Copy file from one folder top another
// console.log("copied");
let currentPath = "F:\\Web Development PepCoding\\JavaScript-Basics\\PepDev-1\\Lecture-5\\client.js"
let ext = path.extname(currentPath)
console.log(ext);

// console.log(typeof "Hello");
// console.log(typeof true);
// // null -> object 
// console.log(typeof null);
// console.log(typeof 10);
let arr=[];
function fn() {
    console.log("fn");
}
// typeof  arr is object
console.log(typeof arr);
console.log(Array.isArray(10));
// functions
console.log(typeof fn);

