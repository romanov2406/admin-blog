import { ICategory } from './category.interface';

export interface IProduct{
    name:string;
    urlName:string;
    category:ICategory;
    description:string;
    price:number;
    image:string;
    // image:File;
    id:number;
}