import {Document,Schema,model,Model} from 'mongoose';
export interface CarType extends Document{
carName:string;
carModel:string;
year:string;
manufacturer:string;
pricePerDay:number;
image:string;
category:Schema.Types.ObjectId;
}

const carSchema:Schema=new Schema<CarType>({
    carName:{
        type:String,
        required:true
    },
    carModel:{ 
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
        type:String,
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