const express = require("express");
const fs = require("fs")
const app = express();
const port = 8000;
const user = require("./MOCK_DATA.json");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/learningMongo").then(()=>{
    console.log("connected to database");
}).catch(e=>{
    console.log(e);
})

//middleware
const userschema = new mongoose.Schema({
    frstname:{
        type : String,
        required: true
    },
    lastname:{
        type : String,
        required: false },
        email:{
            type : String,
            required: true,
            unique: true

        },
        jobtitle :{
            type : String,
        },
        gender :{
              type: String
        }
})

const dbuser= mongoose.model("userdb", userschema)

app.use(express.urlencoded({extended : false}))

//middleware
app.use((req, res, next)=>{
   // res.send("empty")
   req.first_name = "radhika"
   next();
})
app.use((req, res, next)=>{

    console.log(req.first_name)
  //  res.send("done")
  next();

})

//get for browser

app.get("/api/users", (req, res) => {
  return res.json(user);
});
//get for other apps
app.get("/users", (req, res) => {
  const html = `
    <ul>
     
        ${user.map(u => `<li>${u.first_name}</li>`).join("")}

    </ul>
    `;
    res.send(html)
});

// get for particular id 
app.get("/users/:id", (req,res)=>{
    const idd = Number(req.params.id);
   // console.log(idd)
   res.setHeader("myname","rad")
   const us = user.find(u => {return u.id === idd});
   if(us==null) return res.status(404).json({status:"no user found"})
  //  console.log(us)
   return res.json(us)

})


app.post("/api/users", (req,res)=>{
    const body = req.body;
    user.push({...body, id: user.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (req, re)=>{
        res.status(201).json({id: user.length})
    })
    
})

app.patch("/users/:id",(req,res)=>{
    const idd = Number(req.params.id);
    const s ="sanyam"
   const us = user.find(u => { if(u.id === idd){u.first_name=s;
    return idd;
   }
 
   });

//    const body = req.body;
//     user.push({...body, id: user.length+1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (req, re)=>{
        res.json({id: user.length})
    })
 

 //  return res.json(us)
     
    
})

app.delete("/users/:id", (req,res)=>{
    const idd = Number(req.params.id);
    const us = user.find(u => {return u.id === idd});
   // console.log(us)
    user.pop(us);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (req, re)=>{
        res.json({status: "completed"})
    })

})

app.listen(port, () => console.log("server has started"));
