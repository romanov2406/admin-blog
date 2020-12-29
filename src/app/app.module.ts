import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { AdminProductsComponent } from './pages/admin/admin-products/admin-products.component';
import { AdminCategoriesComponent } from './pages/admin/admin-categories/admin-categories.component';
import { DiscountDetailsComponent } from './pages/discount-details/discount-details.component';
import { SearchPipe } from './pages/admin/admin-categories/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminBlogComponent } from './pages/admin/admin-blog/admin-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BlogComponent,
    AboutComponent,
    AdminComponent,
    HeaderComponent,
    AdminProductsComponent,
    DiscountDetailsComponent,
    AdminCategoriesComponent,
    SearchPipe,
    AdminBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
