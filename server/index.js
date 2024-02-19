const express= require("express");
const mongoose = require("mongoose");
const cors=require("cors");

const app=express();

app.use(cors());
app.use(express());

app.listen(3000, ()=>{
    console.log("server is Running")
})