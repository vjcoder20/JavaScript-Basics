let path = require("path");
let fs = require("fs");
//input
let inputarr = process.argv.slice(2);
let filename = inputarr[0];
let content = inputarr[1];
// console.log("file name:",filename);
// console.log("content:",content);

let currentpath = process.cwd();
console.log(currentpath);
//path -> paths-> platform independent 
// let joinedpath = path.join(currentpath,"abc","def","ghi");
// console.log(joinedpath);
let filepath = path.join(currentpath,"dir",filename);
console.log("filepath",filepath);
fs.writeFileSync(filepath,content);