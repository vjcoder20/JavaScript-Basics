//array is a collection of anything in javascript
function fn(){
    console.log("Hello I am a Function");
    return 10;
}
let arr =  [
    1,
    1.1,
    true,
    null,
    [1,2,3,4,5],
    "string",
    fn
]
// console.log(arr);
// console.log(arr[arr.length-2][1]);

// //function invocation
// console.log("function:",fn);
// let fval = fn();
// console.log("fval:",fval)

// console.log("accessing the last element",arr[arr.length-1]);
// console.log("calling the last element",arr[arr.length-1]());
// fn();
let rval = fn();
console.log("rval:",rval);