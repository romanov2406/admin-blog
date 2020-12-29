import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from './../interfaces/category.interface';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string;
  private prodUrl:string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/categories';
    this.prodUrl = 'http://localhost:3000/products';
  }

  getJSONCat(): Observable<Array<ICategory>> {
    return this.http.get<Array<ICategory>>(this.url);
  }
  postJSONCat(cat: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(this.url, cat);
  }
  deleteJSONCat(id: number): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.url}/${id}`)
  }
  updateJSONCat(cat: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.url}/${cat.id}`, cat);
  }
  getJSONOneCat(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.url}/${id}`);
  }
/////Products
  getJSONProd(): Observable<Array<IProduct>> {
    return this.http.get<Array<IProduct>>(this.prodUrl);
  }
  getCategoryProduct(catName:string):Observable<Array<IProduct>>{
    return this.http.get<Array<IProduct>>(`${this.prodUrl}?category.urlName=${catName}`)
  }
  postJSONProd(prod: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.prodUrl, prod);
  }
  deleteJSONProd(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.prodUrl}/${id}`)
  }
  updateJSONProd(prod: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.prodUrl}/${prod.id}`, prod);
  }
}
