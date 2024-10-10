const express = require("express");
const fs = require("fs")
const app = express();
const port = 8000;
const userrouter = require ("./routes/user")
const {connectmongodb} = require("./connection")

connectmongodb("mongodb://localhost:27017/learningMongo").then(console.log("mongo db connected"))

app.use(express.urlencoded({extended : false}))

app.use("/users", userrouter)

app.listen(port, () => console.log("server has started"));