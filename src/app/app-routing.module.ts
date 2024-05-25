




import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './carts/components/cart/cart.component';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
const routes: Routes = [
 {path:'cart' , component:CartComponent},
 {path:'allProducts' , component:AllProductsComponent},
 {path:'productsDetails' , component:ProductsDetailsComponent},
 {path:'**' , redirectTo:'allProducts' ,  pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
