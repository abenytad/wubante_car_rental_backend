import {Document,Schema,model} from 'mongoose';
import imageSchema,{ Image } from '../image.mongo';
type CarType={
name:string;
model:string;
year:string;
manufacturer:string;
pricePerDay:number;
image:Image;
category:Schema.Types.ObjectId;
}

const carSchema=new Schema<CarType>({
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
    }

},{timestamps:true});

const Car=model<CarType>('Car',carSchema);
export default Car;