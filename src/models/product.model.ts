import { ICategory } from "src/interfaces/category.interface";
import { IProduct } from "src/interfaces/product.interface";



export class Product implements IProduct {
    constructor (
       public name:string,
       public urlName:string,
       public category:ICategory,
       public description:string,
       public price:number,
    //    public image:File,
       public image:string,
       public id:number,
    ){}
}
