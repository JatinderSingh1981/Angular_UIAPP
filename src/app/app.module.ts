import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alert/alert.component';
import { ProductList } from './Products/productlist/productlist.component';
import { ProductDetailComponent } from './Products/productDetail/product-detail.component';
import { Product } from './Products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ProductList,
    ProductDetailComponent,
    Product
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  //exports: [ProductList],
  bootstrap: [AppComponent]
})
export class AppModule { }



