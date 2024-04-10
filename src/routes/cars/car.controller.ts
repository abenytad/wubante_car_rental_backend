import { Request,Response } from 'express';
import { CarType } from '../../models/car/car.mongo';
import { CategoryType } from '../../models/car/category.mongo';
import {createCar,createCategory,getCategories,getCarsByCategory,getCarByCarId,getCarRentByCarId,getCarsInfoByCategory} from '../../models/car/car.model';

const newCar=async (req:Request,res:Response)=>{
    try{
     const data:CarType=req.body();
  const car=await createCar(data);
  return res.status(201).json(car)
    } catch(err){
        return res.status(404).json({error:`${err}`})
    }
}
const newCategory=async (req:Request,res:Response)=>{
    try {
   const data:CategoryType=req.body;
   const category=await createCategory(data);
   return res.status(201).json(category);
    } catch(err){
      return  res.status(404).json({error:`${err}`})
    }
}
const fetchCategories=async (req:Request,res:Response)=>{
  try {
  const data:CategoryType[] | []=await getCategories();
  return res.status(200).json(data);
  } catch(err){
    return  res.status(404).json({error:`${err}`})
  }
}
const fetchCarsByCategory=async (req:Request,res:Response)=>{
  try{
  const {categoryId}:{categoryId?:string}=req.params;
  const data:Partial<CarType>[] | []=await getCarsByCategory(categoryId);
  return res.status(200).json(data);
  }catch(err){
    return  res.status(404).json({error:`${err}`})
  }
}
const fetchCarByCarId=async (req:Request,res:Response)=>{
  try {
  const {carId}:{carId?:string}=req.params;
  const data:CarType | null=await getCarByCarId(carId);
  return res.status(200).json(data);
  } catch(err) {
    return res.status(404).json({error:`${err}`})
  }
}
const fetchCarRentByCarId=async(req:Request,res:Response)=>{
  try{
    const {carId}:{carId?:string}=req.params;
    const data:Partial<CarType>|null=await getCarRentByCarId(carId);
    return res.status(200).json(data);
  } catch(err){
    return res.status(404).json({error:`${err}`})
  }
}
const fetchCarsInfoByCategory=async (req:Request,res:Response)=>{
  try{
    const {categoryId}:{categoryId?:string}=req.params;
    const data:CarType[]|[]=await getCarsInfoByCategory(categoryId);
    return res.status(200).json(data);
  } catch(err){
    return res.status(404).json({error:`${err}`})
  }
}

export {newCar,newCategory,fetchCategories,fetchCarsByCategory,fetchCarByCarId,fetchCarRentByCarId,fetchCarsInfoByCategory};