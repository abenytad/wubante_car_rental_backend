import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users/user.route';
import carRouter from './routes/cars/car.route';
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/users',userRouter);
app.use('/cars',carRouter);
module.exports=app;