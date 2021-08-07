//npm i request -> for request module
//npm i cheerio -> for cheerio module
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request("https://www.npmjs.com/package/cheerio",cb)
function cb(error,response,html){
    if(error){
        console.log(error);  //Print the error if occured
    }

    else if (response.statusCode==404) {
        console.log("Page Not Found");
    }

    else{
    // console.log(html); //Print the contents of html of request like in this it will bring homepage HTML of Google
    dataExtractor(html);
    }
}
 function dataExtractor(html){
     //search tool
     let searchtool = cheerio.load(html);
     //css selector -> Html
    let elemrep = searchtool("#readme>h1");
    //text
    let moduleName = elemrep.text().trim();
    console.log("moduleName:", moduleName);
 }
 console.log("After");