import {Model,model,Schema,Document} from 'mongoose';
import imageSchema,{Image} from '../image.mongo';
interface UserType extends Document {
    userId:Schema.Types.ObjectId;
    userName:string;
    phoneNumber:number;
    password:string;
    userImage:Image;
}

const userSchema:Schema=new Schema<UserType>({
    userId:{
        type:Schema.Types.ObjectId,
        required:true,
    },
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