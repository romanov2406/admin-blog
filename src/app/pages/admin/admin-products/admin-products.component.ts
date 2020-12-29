import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ICategory } from 'src/interfaces/category.interface';
import { IProduct } from './../../../../interfaces/product.interface';
import { ApiService } from './../../../api.service';
import { Product } from './../../../../models/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  id: number;
  products: Array<IProduct> = [];
  categories: ICategory[] = [];
  category: ICategory;
  name: string;
  desc: string;
  price: number;
  targetImg: File;
  choose: any;
  fileToUpload: File = null;
  img: string = 'https://www.lapiec-pizza.com.ua/wp-content/uploads/2018/07/LA-P_yets-1.png';
  filter: string;
  isEdit: boolean;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getStaticCategory();
    this.getStaticProduct();
  }
  // Category
  getStaticCategory(): void {
    this.apiService.getJSONCat().subscribe(
      data => {
        this.categories = data;
      },
      err => console.log(err)
    )
  }
  // getImg(event):void{
  //   this.targetImg = event.target.files;
  //   console.log(this.targetImg);
  // }

  // Products
  getStaticProduct(): void {
    this.apiService.getJSONProd().subscribe(
      data => {
        this.products = data
      }
    )
  }
  addProduct(): void {
    if (this.name && this.category.name && this.category && this.desc && this.price && this.img && this.id) {
      const NEW_PROD = new Product(this.name, this.category.name, this.category, this.desc, this.price, this.img, this.id);
      delete NEW_PROD.id
      this.apiService.postJSONProd(NEW_PROD).subscribe(
        () => {
          this.getStaticProduct();
        }
      )
    } else {
      alert('Заповніть всі поля')
    }
  }
  deleteProduct(id: number): void {
    this.apiService.deleteJSONProd(id).subscribe(
      () => this.getStaticProduct()
    )
  }
  updateProduct(): void {
    const NEW_PROD = new Product(this.name, this.category.name, this.category, this.desc, this.price, this.img, this.id);
    this.apiService.updateJSONProd(NEW_PROD).subscribe(
      () => {
        this.getStaticProduct();
        this.isEdit = false;
      }
    )
  }
  editProduct(elem: IProduct): void {
    this.id = elem.id;
    this.img = elem.image;
    this.category = elem.category;
    this.name = elem.name;
    this.desc = elem.description;
    this.price = elem.price;
    this.isEdit = true;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
