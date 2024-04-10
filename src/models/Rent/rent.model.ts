import Rent,{RentType} from "./rent.mongo";
const createRent=async (data:RentType)=>{
const rent =await Rent.create(data);
return rent;
}

export {createRent};