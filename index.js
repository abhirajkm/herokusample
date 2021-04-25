var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



app.post('/add', (req,res)=>{
    var getNum1= parseInt(req.body.num1)
    var getNum2= parseInt(req.body.num2)

    var result = getNum1+getNum2

    res.json({'result' : result})

    
})



app.post('/home', (req,res)=>{
    var getName= req.body.name
    var getRoll= req.body.rollno

    res.json({'name' : getName , 'rollno' : getRoll})

    
})
app.listen (5000, ()=>{
    console.log("server started at http://localhost5000")
})