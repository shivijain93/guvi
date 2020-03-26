const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({ extended: true })); 

var a=[];
app.get('/',function(req,res){
    res.json(a)
});

app.post('/users',function(req,res){
    console.log(req.body);
    
    a.push(req.body)
    res.json({
        message:"request received"
    })
})
app.put('/users/:id',function(req,res){ 
    console.log(req.params.id);
    res.json({
        message:"request received"
    })
})

app.delete('/', function(req,res){
    console.log(a)
})

app.listen(3000,function(){
    console.log("Success")
});