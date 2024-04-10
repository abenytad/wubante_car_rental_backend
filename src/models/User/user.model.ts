import User from "./user.mongo";
import { UserType } from "./user.mongo";
const createUser=async(data:UserType)=>{
   const user:UserType=await User.create(data);
   return user;
 }

 export {createUser};

