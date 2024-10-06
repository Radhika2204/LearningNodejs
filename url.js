const http = require("http");
const fs = require("fs")
const url = require("url")

const myserver = http.createServer((req, res)=>{
         const u = url.parse(req.url);
         console.log(u)
        const log =`${Date.now()}:New Req received from ${req.url}\n`
        fs.appendFile('log.txt', log, (err) => {
            res.end("hello from server ")})

});

myserver.listen(8000, ()=>{
    console.log("server is running on port 8000")
})
