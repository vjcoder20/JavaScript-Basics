console.log("Hello World");
let a;
a = 10;
a = "I am String"
console.log(a);
for(let i=1;i<=10;i++){
    console.log("Number is "+ i);
}
let b = 5/2;
console.log(b);
//single line print on only condition that it needs string
process.stdout.write("Hello ");
process.stdout.write("Hello");
console.log();


//input type cohersion
//->concatenation converts number into string(+)
console.log("Hello i am something "+10); //10 is string
//arithemetic operators converts a string into number(-,<,>,',')
console.log("Hello i am something",10); //10 is number
let input = "10";
console.log(input<5);

