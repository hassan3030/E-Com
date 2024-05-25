






import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private _HttpClient:HttpClient) { }
  APILinkProducts : string = 'products';
  products: any[] = [];
  productsCategory: any[] = [];
  cartsProducts: any[] = [];
  getAllProducts(){
    return this._HttpClient.get(environment.baseApi+this.APILinkProducts);
    }
  addToCart(product:{}){
    this.cartsProducts.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cartsProducts))
  }
  deleteFromCart(index:any){
    this.cartsProducts.splice(index,1);
    localStorage.setItem('cart', JSON.stringify(this.cartsProducts))
  }
}
