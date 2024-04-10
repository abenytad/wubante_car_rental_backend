import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users/user.route';
import carRouter from './routes/cars/car.route';
import rentRouter from './routes/rents/rent.route';
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/users',userRouter);
app.use('/cars',carRouter);
app.use('/rents',rentRouter);
module.exports=app;