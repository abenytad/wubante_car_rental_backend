import Car,{CarType} from "./car.mongo";
import Category,{CategoryType} from "./category.mongo";
 const createCar=async (data:CarType):Promise<CarType>=>{
  return await Car.create(data);
 }
 const createCategory=async (data:CategoryType):Promise<CategoryType>=>{
    return await Category.create(data);
   }
  const getCategories=async ():Promise<CategoryType[]>=>{
    return await Category.find({},{_v:0,createdAt:0,updatedAt:0}).populate('image');
  }
  const getCarsByCategory=async (categoryId:string):Promise<Partial<CarType>[] | []>=>{
    return Car.find({category:categoryId},{
      _id:1,carName:1,model:1,year:1,image:1
    }).populate('image');
  }
  const getCarByCarId=async (carId:string):Promise<CarType | null>=>{
    return Car.findById(carId,{_v:0,createdAt:0,updatedAt:0}).populate('image');
  }
  const getCarRentByCarId=async (carId:string):Promise<Partial<CarType> | null>=>{
    return await Car.findById(carId,{_id:1,carName:1,model:1,year:1,image:1}).populate('image');
  }
  const getCarsInfoByCategory=async (categoryId:string):Promise<CarType[] | []>=>{
    return Car.find({category:categoryId},{
      v:0,createdAt:0,updatedAt:0
    }).populate('image');
  }
 export {createCar,createCategory,getCategories,getCarsByCategory,getCarByCarId,getCarRentByCarId,getCarsInfoByCategory};