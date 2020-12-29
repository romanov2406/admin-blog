import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from 'src/app/blogs.service';
import { IBlog } from './../../../interfaces/blog.interface';
import { Location } from '@angular/common';


@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent implements OnInit {
  product:IBlog;
  constructor(
    private discService: BlogsService,
    private actovateRoute:ActivatedRoute,
    public location: Location
    ) { }

  ngOnInit(): void {
    this.getOneProduct();
  }
  getOneProduct(): void {
    const id = this.actovateRoute.snapshot.paramMap.get('id');
    this.discService.getJSONOneProduct(+id).subscribe(
      data => {
        this.product = data;
      }
    )
  }
}
