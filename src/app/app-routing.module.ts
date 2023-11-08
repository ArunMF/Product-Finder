import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { //localhost:4200 -> localhost:4200/productManager
    path:'',redirectTo:'productManager',pathMatch:'full'
  },
  // Listing all products
  {
    path:'productManager',component: ProductManagerComponent
  },
  // View product
  {
    path:'productManager/viewProduct/:id',component: ViewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
