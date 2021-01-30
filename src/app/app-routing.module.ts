import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Products } from './Products/products';
const routes: Routes = [
  { path: '', component: Products },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
