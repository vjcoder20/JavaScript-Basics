let fs = require("fs");
console.log("Before");
fs.readFile("f1.txt",cb); 
function cb(err,content){   //async call
    console.log("content "+content);
    fs.readFile("f2.txt",cb1);
}
function cb1(err,content){
    console.log("content "+content);
    fs.readFile("f3.txt",cb2);
}
function cb2(err,content){
    console.log("content "+content);
}
console.log("After");

// Here remember that the output come in series form that is one after the another