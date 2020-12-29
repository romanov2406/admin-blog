import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { DiscountDetailsComponent } from './pages/discount-details/discount-details.component';
import { AdminBlogComponent } from './pages/admin/admin-blog/admin-blog.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'about', component: AboutComponent },
  {path: 'discount-ditails/:id', component: DiscountDetailsComponent },
  {path: 'admin', component: AdminComponent, children:[
    {path: 'admin-products', component: AdminProductsComponent},
    {path: 'admin-categories', component: AdminCategoriesComponent},
    {path: 'admin-blog', component: AdminBlogComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
