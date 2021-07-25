//represent empty objects
let obj = {};
// Key->string,numbers
//value->anything
//function->methods
//variables->properties
let cap = {
    name : "Steve",
    lastname:"Rogers",
    friends : ['Tony','Henry','Bruce'],
    isAvenger:true,
    age:34,
    sayHi:function(){
        console.log("Cap say's Hi");
    },
    address:{
        state:"Ney York",
        City:"NY City"
    }
}
console.log(cap);
//get
//.notation
console.log(cap.friends[1]);
console.log(cap.address);
//[] operator
let varname = "isAvenger";
console.log(cap[varname]);
//for loop
for(let key in cap){
    console.log(key , ":", cap[key])
}