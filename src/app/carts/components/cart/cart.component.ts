




import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _ProductsService:ProductsService) { }
  cartsProducts:any;
  sumProducts = 0;
  ngOnInit(): void {
    this.cartsProducts = this._ProductsService.cartsProducts;
    this.sumPrice()

  }

  sumPrice(){
    this._ProductsService.cartsProducts.forEach((Products)=>{ this.sumProducts+=Products.price })
  }
  deleteFromCart(index:any){
    this._ProductsService.deleteFromCart(index);
    this.sumProducts -= this.cartsProducts[index]?.price
    console.log(this._ProductsService.cartsProducts.length)
    if( this._ProductsService.cartsProducts.length == 0 ) this.sumProducts = 0 ;
  }
}
