import { Schema,Document } from "mongoose";
export interface Image extends Document {
    name:string;
    data:Buffer;
    contentType:string;
}


const imageSchema=new Schema<Image>({
    name:{type:String},
    data:{type:Buffer},
    contentType:{type:String}
})

export default imageSchema;