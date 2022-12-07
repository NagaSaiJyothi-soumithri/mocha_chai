const express = require("express")
var app = express();
var expect = require('expect');

app.get("/",(req,res)=>{
    //res.status(404).send("Hello world")
    res.status(404).send({name: 'jyothi', age: '21'})
})

app.get("/user",(req,res)=>{
    res.status(200).send([{name:"naga", age:"18"},{name:"sai", age:"19"},{name:"jyothi", age:"20"}])
})

app.listen(5000)

module.exports.app = app