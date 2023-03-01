import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from '../app/product-list/product-list.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
