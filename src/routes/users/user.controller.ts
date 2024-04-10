import {Request,Response} from 'express';
import User,{UserType} from '../../models/User/user.mongo';
import { createUser } from '../../models/User/user.model';
const newUser=async (req:Request,res:Response)=>{
  try {
 const data:UserType=req.body;
 const user=await createUser(data);
return res.status(201).json(user);
 
  } catch(err){
return res.status(404).json({error:`${err}`})
  }
}

export {newUser}