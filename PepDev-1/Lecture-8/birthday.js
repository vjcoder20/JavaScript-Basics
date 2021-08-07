//birthday of bowlers
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
     
     for(let i=0;i<bowlers.length;i++){
         let cols = searchtool(bowlers[i]).find("td");
         let aelem = searchtool(cols[0]).find("a");
        let link = aelem.attr("href");
        let fulllink = `https://www.espncricinfo.com${link}`;
        request(fulllink,newcb);
         
     }
     
 }
 function newcb(error,response,html){
    if(error){
        console.log(error);  
    }

    else if (response.statusCode==404) {
        console.log("Page Not Found");
    }

    else{
    console.log("```````````````````````````");
    getBirthday(html);
    }
}
function getBirthday(html){
    let searchTool = cheerio.load(html);
    let headingArr = searchTool(".player-card-description");
    let age = searchTool(headingArr[2]).text();
    let name = searchTool(headingArr[0]).text();
    console.log(name+" "+age);
}
 console.log("After");