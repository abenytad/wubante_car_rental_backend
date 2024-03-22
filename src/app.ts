const cors=require('cors');
const express=require('express');
const bodyParser=require('body-parser');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
module.exports=app;