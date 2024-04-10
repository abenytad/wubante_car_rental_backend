import { Router } from "express";
import { newCar,newCategory,fetchCategories,fetchCarByCarId,fetchCarsByCategory,fetchCarRentByCarId,fetchCarsInfoByCategory } from "./car.controller";
const carRouter:Router=Router();
carRouter.post('/',newCar);
carRouter.post('/category',newCategory);
carRouter.get('/categories',fetchCategories);
carRouter.get('/category/:categoryId',fetchCarsByCategory);
carRouter.get('/:carId',fetchCarByCarId);
carRouter.get('/rent/:carId',fetchCarRentByCarId);
carRouter.get('/info/:categoryId',fetchCarsInfoByCategory);

export default carRouter;