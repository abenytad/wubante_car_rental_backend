import {Schema,model, Document} from 'mongoose';
import imageSchema,{Image} from '../image.mongo';
interface CategoryType extends Document{
    name:string;
    description?:string;
    image:Image
    cars:Schema.Types.ObjectId[]
}


const categorySchema=new Schema<CategoryType>({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:imageSchema,
        required:true,
    },
    cars:[{
        type:Schema.Types.ObjectId,
        ref:'Car'
    }]
},{timestamps:true});

const Category=model<CategoryType>('Category',categorySchema);
export default Category;