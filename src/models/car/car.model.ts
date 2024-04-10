import Car,{CarType} from "./car.mongo";
import Category,{CategoryType} from "./category.mongo";
 const createCar=async (data:CarType)=>{
  const car=await Car.create(data);
  return car;
 }

 const createCategory=async (data:CategoryType)=>{
    const category=await Category.create(data);
    return category;
   }
  
 export {createCar,createCategory};