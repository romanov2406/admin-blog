import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api.service';
import { IProduct } from './../../../interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pizza:IProduct[] = [];
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getStaticProduct();
  }

  getStaticProduct():void{
    this.apiService.getCategoryProduct('pizza').subscribe(
      data => {
        this.pizza = data;
      }
    )
  }
}
