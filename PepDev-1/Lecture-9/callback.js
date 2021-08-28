let arr = [1,2,3,4,5];
function square(x){
    return x*x;
}
function cuber(x){
    return x*x*x;
}
//function can be passed as an argument
//it will apply the cb fn to all the elements of array and return the newArr
function caller(arr,cb){     //here cb is receiving the address of a square function 
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        let value = cb(arr[i]);
        newArr.push(value);
    }
    return newArr;
}

let sqArr = caller(arr,square); //here we are passing the address of a function square
console.log("arr",sqArr);
let cubArr = caller(arr,cuber);
console.log("arr",cubArr);
