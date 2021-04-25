var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')



var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/', (req,res)=>{
    

   res.send("hello")

    
})

app.post('/add', (req,res)=>{
    var getNum1= parseInt(req.body.num1)
    var getNum2= parseInt(req.body.num2)

    var result = getNum1+getNum2

    res.json({'result' : result})

    
})



app.post('/read', (req,res)=>{
    var getName= req.body.name
    var getRoll= req.body.rollno

    res.json({'name' : getName , 'rollno' : getRoll})

    
})
app.listen (process.env.PORT || 5000, ()=>{
    console.log("server started at http://localhost5000")
})