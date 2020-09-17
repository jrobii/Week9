import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewproductComponent } from './newproduct/newproduct.component';
import { ProductsComponent } from './products/products.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'add', component: NewproductComponent},
  {path: 'edit/:id', component: UpdateproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
