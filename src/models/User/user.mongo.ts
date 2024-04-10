import {Model,model,Schema,Document} from 'mongoose';
import imageSchema,{Image} from '../image.mongo';
export interface UserType extends Document {
    userName:string;
    phoneNumber:number;
    password:string;
    userImage?:Image;
}

const userSchema:Schema=new Schema<UserType>({
    userName:{
        type:String,
        required:[true,'name is required'],
    },
    phoneNumber:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    userImage:{
        type:imageSchema,
    }
},{timestamps:true}) ;
const User:Model<UserType>=model<UserType>('User',userSchema);
export default User;