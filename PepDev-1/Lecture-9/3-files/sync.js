let fs = require("fs");
console.log("Before");
let content = fs.readFileSync("f1.txt");
console.log("content "+content);
let content2 = fs.readFileSync("f2.txt");
console.log("content "+content2);
let content3 = fs.readFileSync("f3.txt");
console.log("content "+content3);
console.log("After");