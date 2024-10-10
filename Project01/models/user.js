const mongoose = require("mongoose");

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

module.exports= dbuser