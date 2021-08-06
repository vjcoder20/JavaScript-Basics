//fuction expression - In JS function treated as a variable
let exp = function () {
    console.log("I am a function expression");
    return 0;
}
exp();


//IIFE  -> Immediately invoke function expression - No need to call this function
(function fn(val){
    console.log("I am a IIFE and i will called immediately",val);
})(100)


//arrow function -> react mein use aayega
let arrowfn = () => {
console.log("I am a arrow function");
}
arrowfn()
