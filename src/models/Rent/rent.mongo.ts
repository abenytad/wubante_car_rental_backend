import {Schema,model,Document} from 'mongoose';

interface PdfFormatType extends Document {
    name:string;
    data:Buffer;
    contentType:string;
}
export interface RentType extends Document {
    carId:Schema.Types.ObjectId;
    userId:Schema.Types.ObjectId;
    userLicense:PdfFormatType;
    startDate:Date;
    numberOfDays:number;
}
const PdfFormat=new Schema<PdfFormatType>({
    name:{
        type:String,
    },
    data:{
        type:Buffer,
    },
    contentType:{
        type:String
    }
})
const rentSchema=new Schema<RentType>({
    carId:{
        type:Schema.Types.ObjectId,
        ref:'Car',
        required:true,
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    userLicense:{
        type:PdfFormat,
        required:true,
    },
    startDate:{
        type:Date,
        required:true,
    },
    numberOfDays:{
        type:Number,
        required:true,
    }
},{timestamps:true});
const Rent=model<RentType>('Rent',rentSchema);
export default Rent;