import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'about', component: AboutComponent },
  {path: 'admin', component: AdminComponent, children:[
    {path: 'admin-products', component: AdminProductsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
