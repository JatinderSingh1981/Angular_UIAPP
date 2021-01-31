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
import { Product } from './Products/product/product.component';

import { CustomMinDirective } from '../shared/customvalidators/custom-min-validator.directive';
import { CustomMaxDirective } from '../shared/customvalidators/custom-max-validator.directive';

@NgModule({
  declarations: [
    CustomMinDirective,
    CustomMaxDirective,
    AppComponent,
    AlertComponent,
    ProductList,
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



