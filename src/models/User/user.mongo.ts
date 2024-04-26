import {Model,model,Schema,Document} from 'mongoose';
export interface UserType extends Document {
    userName:string;
    phoneNumber:number;
    password:string;
    userImage?:string;
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
        type:String,
    }
},{timestamps:true}) ;
const User:Model<UserType>=model<UserType>('User',userSchema);
export default User;