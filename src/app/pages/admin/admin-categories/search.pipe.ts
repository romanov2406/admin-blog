import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from './../../../../interfaces/category.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(value: ICategory[], args?: any): any {
    if(!value)return null;
    if(!args)return value;
    args = args.toLowerCase();
    return value.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}
