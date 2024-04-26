import cors from 'cors';
import express from 'express';
import multer from 'multer';
import bodyParser from 'body-parser';
import userRouter from './routes/users/user.route';
import carRouter from './routes/cars/car.route';
import rentRouter from './routes/rents/rent.route';
import path from 'path';
require('dotenv').config();

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/Images');
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+ Date.now() + path.extname(file.originalname));
    }
})
export const upload=multer({
    storage:storage,
})
app.use('/users',userRouter);
app.use('/cars',upload.single('file'),carRouter);
app.use('/rents',rentRouter);
module.exports=app;