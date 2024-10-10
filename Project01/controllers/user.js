const dbuser = require("../models/user")

async function handlerequest(req,res){
 const alldbusers = await dbuser.find({});
 return res.json({alldbusers})
}
async function getuserbyid (req,res){
    const idd = req.params.id
    const u = await dbuser.findById(idd)
    return res.json({u})
}

async function handlepatch  (req,res){
    const u = await dbuser.findByIdAndUpdate(req.params.id, {lastname : "chnaged"})
    return res.json(u)
}

async function handledeleteidasync(req,res){
    const u = await dbuser.findByIdAndDelete(req.params.id)
    return res.json({statis : "changes "})
}

async function handlepostbyid (req,res){
    const u =  await dbuser.create({
        frstname : req.body.first_name,
        lastname : req.body.last_name,
        email : req.body.email,
        gender : req.body.gender
        
      })

      return res.status(201).json({msg :"success"})
}
module.exports ={
    handlerequest,
    getuserbyid,
    handlepatch,
    handledeleteidasync,handlepostbyid
}