//const url = require("url")
const express= require("express")
//const http = require("http")
//this app is handler fucntion
const app= express();

app.get("/", (req,res)=>{
    res.send("Hello world");
})

app.get("/radhika", (req,res)=>{
    res.send("Hello radhika" + req.query.name);

})

app.listen(8000)
//const myserver = http.createServer(app).listen(8000);
