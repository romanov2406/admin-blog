import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/models/blog.model';
import { IBlog } from './../../../../interfaces/blog.interface';
import { BlogsService } from './../../../blogs.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  blogs: Array<IBlog> = [];
  title: string;
  text: string;
  author: string;
  currentUser: IBlog;
  currenId: number;
  isEdit: boolean;
  image = 'https://www.marcopolo.de/fileadmin/media/Magazin/Reportagen/2018/Pizza-Frau-Shutterstock.jpg'
  constructor(public blogService: BlogsService) { }

  ngOnInit(): void {
    this.getBlogs();
    this.getServerBlog();
  }

  addBlog(): void {
    let NEW_BLOG = new Blog(this.currenId, this.title, this.text, new Date(), this.author, this.image);
    delete NEW_BLOG.id
    this.blogService.postJSONBlog(NEW_BLOG).subscribe(() => {
      this.getServerBlog()
    },
      err => console.log(err));
    this.formReset();
  }

  formReset(): void {
    this.author = '';
    this.title = '';
    this.text = '';
  }

  getBlogs(): void {
    this.blogs = this.blogService.getStaticBlog()
  }
  getServerBlog(): void {
    this.blogService.getJSONBlog().subscribe(
      data => {
        this.blogs = data
      },
      err => console.log(err)
    )
  }
  deleteBlog(blog: IBlog): void {
    this.blogService.deleteJSONBlog(blog.id).subscribe(
      () => {
        this.getServerBlog()
      },
      err => console.log(err)

    )
  }
  
  editBlog(blog: IBlog): void {
    this.currenId = blog.id
    this.text = blog.text;
    this.title = blog.title;
    this.author = blog.author;
    this.isEdit = true;
  }

  saveBlog(): void {
    let NEW_BLOG = new Blog(this.currenId, this.title, this.text, new Date(), this.author, this.image);
    this.blogService.updateJSONBlog(NEW_BLOG).subscribe(
      () => {
        this.getServerBlog()
      },
      err => console.log(err)
    )
    this.isEdit = false;
    this.formReset();
  }
}
