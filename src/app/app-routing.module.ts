import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductList } from './Products/productlist/productlist.component';
import { Product } from './Products/product/product.component';
const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'details/:id', component: Product },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
