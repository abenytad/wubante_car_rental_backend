import {Schema,model, Document,Model} from 'mongoose';

export interface CategoryType extends Document{
    name:string;
    description?:string;
    image:string;
    cars:Schema.Types.ObjectId[]
}


const categorySchema:Schema=new Schema<CategoryType>({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        required:true,
    },
    cars:[{
        type:Schema.Types.ObjectId,
        ref:'Car'
    }]
},{timestamps:true});

const Category:Model<CategoryType>=model<CategoryType>('Category',categorySchema);
export default Category;