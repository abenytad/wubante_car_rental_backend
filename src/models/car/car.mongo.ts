import {Document,Schema,model,Model} from 'mongoose';
import imageSchema,{ Image } from '../image.mongo';
interface CarType extends Document{
name:string;
model:string;
year:string;
manufacturer:string;
pricePerDay:number;
image:Image;
category:Schema.Types.ObjectId;
}

const carSchema:Schema=new Schema({
    name:{
        type:String,
        required:true
    },
    model:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    pricePerDay:{
        type:Number,
        required:true
    },
    image:{
        type:imageSchema,
        required:true
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    }

},{timestamps:true});

const Car:Model<CarType>=model<CarType>('Car',carSchema);
export default Car;