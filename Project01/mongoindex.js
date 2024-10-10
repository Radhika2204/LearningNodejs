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
        
        gender :{
              type: String
        }
        
},{timestamps :true})

const dbuser= mongoose.model("userdb", userschema)

app.use(express.urlencoded({extended : false}))

app.post("/api/users", async(req,res)=>{
    const u =  await dbuser.create({
        frstname : req.body.first_name,
        lastname : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender
        
      })

      return res.status(201).json({msg :"success"})
})

app.get("/users", async(req,res)=>{
    const u = await dbuser.find({})
    return res.status(202).json(u)
})
app.get("/users/:id", async (req,res)=>{
    const idd = req.params.id
    const u = await dbuser.findById(idd)
    return res.json({u})
})
app.patch("/users/:id", async (req,res)=>{
    const u = await dbuser.findByIdAndUpdate(req.params.id, {lastname : "chnaged"})
    return res.json(u)
})
app.delete("/users/:id",async(req,res)=>{
    const u = await dbuser.findByIdAndDelete(req.params.id)
    return res.json({statis : "changes "})
})
app.listen(port, () => console.log("server has started"));