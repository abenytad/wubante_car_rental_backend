import { Request,Response } from 'express';
import { CarType } from '../../models/car/car.mongo';
import { CategoryType } from '../../models/car/category.mongo';
import {createCar,createCategory} from '../../models/car/car.model';

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
export {newCar};