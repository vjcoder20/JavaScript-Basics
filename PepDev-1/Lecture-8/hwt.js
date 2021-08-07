//highest wicket taker
let request = require("request");
let cheerio = require("cheerio");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/royal-challengers-bangalore-vs-sunrisers-hyderabad-eliminator-1237178/full-scorecard";
console.log("Before");
request(url,cb)
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
     let bowlers = searchtool(".table.bowler tbody tr");
     let hwt = 0;
     let hwtname = "";
     for(let i=0;i<bowlers.length;i++){
         let cols = searchtool(bowlers[i]).find("td");
         let name = searchtool(cols[0]).text();
         let wickets = searchtool(cols[4]).text();
         if(hwt<wickets){
             hwt = wickets;
             hwtname = name;
         }
     }
     console.log(hwtname+" "+hwt);
 }
 console.log("After");