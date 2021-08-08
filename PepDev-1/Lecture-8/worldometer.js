
let url = "https://www.worldometers.info/coronavirus/";
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request(url,cb)
function cb(error,response,html){
    if(error){
        console.log(error);  
    }

    else if (response.statusCode==404) {
        console.log("Page Not Found");
    }

    else{
    
    dataExtractor(html);
    }
}
 function dataExtractor(html){
    
     let searchtool = cheerio.load(html);
     //css selector -> Html
    let elemrep = searchtool("h1");
    let cases = searchtool(elemrep[0]).text();
    let death = searchtool(elemrep[1]).text();
    let recovered = searchtool(elemrep[2]).text();

    let datarep = searchtool(".maincounter-number");
    let casesdata = searchtool(datarep[0]).text();
    let deathdata = searchtool(datarep[1]).text();
    let recovereddata = searchtool(datarep[2]).text();
 
    console.log(cases,casesdata);
  console.log(death,deathdata);
  console.log(recovered+recovereddata);
   
 }
 console.log("After");