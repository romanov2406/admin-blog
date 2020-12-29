import { Component, OnInit, TemplateRef } from '@angular/core';
import { ICategory } from './../../../../interfaces/category.interface';
import { ApiService } from './../../../api.service';
import { Category } from './../../../../models/category.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.scss']
})
export class AdminCategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  isEdit: boolean;
  name: string;
  urlName: string;
  id: number = 2;
  filter: string;
  modalRef: BsModalRef;
  constructor(private catService: ApiService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
    this.getStaticCategory();
  }

  getStaticCategory(): void {
    this.catService.getJSONCat().subscribe(
      data => {
        this.categories = data;

      },
      err => console.log(err)

    )
  }
  saveCat(): void {
    const NEW_CATEGORY = new Category(this.name, this.urlName, this.id);
    console.log(this.id);

    this.catService.updateJSONCat(NEW_CATEGORY).subscribe(
      () => {
        this.getStaticCategory();
      }
    )
    this.formReset();
    this.isEdit = false;
  }
  addCat(): void {
    const NEW_CATEGORY = new Category(this.name, this.urlName, this.id);
    delete NEW_CATEGORY.id;
    this.catService.postJSONCat(NEW_CATEGORY).subscribe(
      () => {
        this.getStaticCategory();
      }
    )
    this.formReset();
  }
  editCategory(cat: ICategory): void {
    this.id = cat.id;
    this.name = cat.name;
    this.isEdit = true;
  }
  deleteCategory(id: number): void {
    this.catService.deleteJSONCat(id).subscribe(
      () => {
        this.getStaticCategory();
      }
    )
  }
  private formReset(): void {
    this.name = '';
    this.urlName = '';
  }
}
