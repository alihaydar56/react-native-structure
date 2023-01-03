import HttpService from "../httpService"
import { get_products_url } from "../urls"


export const getProducts=async(skip:number,limit:number)=>{
    try {
        const res=await HttpService.getPaginated(get_products_url,skip,limit);
        return res?.data;
        
    } catch (error:any) {
        console.log("getPruducts error :",error.message)
    }
}