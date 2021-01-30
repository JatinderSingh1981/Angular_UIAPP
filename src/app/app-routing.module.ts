import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductList } from './Products/productlist.component';
const routes: Routes = [
  { path: '', component: ProductList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
