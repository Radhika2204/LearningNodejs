const fs= require("fs");

//sync
//fs.writeFileSync("./testfile", "Radhika")

//asycn
//fs.writeFile("./testfile", "Radhika2", (err) => {"erorr found"})

//sync 
//const s =fs.readFileSync("./testfile", "utf-8");
//console.log(s);


//async

// fs.readFile("./testfile", "utf-8", (error,result)=>{
//     if(error){console.log(error)}
//     else{console.log(result)}
// });


//apend to add in that file

fs.appendFileSync("./testfile","goyal")

const s =fs.readFileSync("./testfile", "utf-8");
console.log(s);
