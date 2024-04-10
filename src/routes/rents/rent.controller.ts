import { Request, Response } from "express";
import { createRent } from "../../models/Rent/rent.model";
import { RentType } from "../../models/Rent/rent.mongo";
const newRent=async (req:Request,res:Response)=>{
    try {
        const data:RentType=req.body;
        const rent=await createRent(data);
        return res.status(201).json(rent);
    } catch(err){
        return res.status(404).json({error:`${err}`})
    }
}