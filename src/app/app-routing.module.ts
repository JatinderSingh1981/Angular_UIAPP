import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductList } from './Products/productlist/productlist.component';
import { ProductDetailComponent } from './Products/productDetail/product-detail.component';
const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'details/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
