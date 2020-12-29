import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from 'src/interfaces/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private blogs: Array<IBlog> = [];
  private url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/blogs'
  }

  public getStaticBlog() {
    return this.blogs;
  }
  //Отримання данних з Сервера 
  getJSONBlog(): Observable<Array<IBlog>> {
    return this.http.get<Array<IBlog>>(this.url);
  }
  //Відправка Данних на сервер
  postJSONBlog(blog: IBlog): Observable<IBlog> {
    return this.http.post<IBlog>(this.url, blog);
  }
  setBlog(blog: IBlog): void {
    this.blogs.push(blog);
    console.log(this.blogs);

  }
  deleteJSONBlog(id: number): Observable<IBlog> {
    return this.http.delete<IBlog>(`${this.url}/${id}`)
  }
  updateJSONBlog(blog:IBlog):Observable<IBlog>{
   return this.http.put<IBlog>(`${this.url}/${blog.id}`,blog);
  }
  getJSONOneProduct(id:number):Observable<IBlog>{
    return this.http.get<IBlog>(`${this.url}/${id}`);
  }
}
