import { Component, OnInit } from '@angular/core';
import { IBlog } from './../../../interfaces/blog.interface';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs:Array<IBlog> = [];
  constructor(public blogService:BlogsService) { }

  ngOnInit(): void {
  this.getBlog();
  this.getServerBlog();
  }
  getBlog():void{
    this.blogs = this.blogService.getStaticBlog()
  }
  getServerBlog(): void{
    this.blogService.getJSONBlog().subscribe(
      data => {
        this.blogs = data
      },
      err => console.log(err)
    )
    }
}
