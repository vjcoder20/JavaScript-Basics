//last ball commentary
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/ball-by-ball-commentary";
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
    let elemrep = searchtool(".match-comment-wrapper .match-comment-long-text");
    let lbc = searchtool(elemrep[0]).text();
  console.log(lbc);
   
 }
 console.log("After");