



import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService:ProductsService) { }
  display = true;
  displaySpinner = true;
  displaySpinnercategory = false;
  products = this._ProductsService.products;
  productsCategory = this._ProductsService.productsCategory;
  ngOnInit(): void {
  this.getAllProducts()
  }
  getAllProducts(){
   this._ProductsService.getAllProducts().subscribe(
     (data:any)=>{ this.products = data , console.log(data) , this.displaySpinner = !this.displaySpinner  },// success
     (err:any)=>{ console.log(err) ; alert(err.status)}// fail
     )

    }

    getCustomProduct(cat:string){
      switch(cat) {
        case 'e':
        this.productsCategory = [];
        this._ProductsService.getAllProducts().subscribe(
            (data:any)=>{
               for (const i of data ) {
                if(i.category == "electronics"){ this.productsCategory.push(i), this.displaySpinnercategory = true }
                  }  } )
          break;
          case 'j':
           this.productsCategory = [];
            this._ProductsService.getAllProducts().subscribe(
            (data:any)=>{ for (const i of data ) {
                if(i.category == "jewelery") this.productsCategory.push(i) ,this.displaySpinnercategory = true
                   console.log(this.productsCategory)}})
          break;
          case 'm':
           this.productsCategory = [];
            this._ProductsService.getAllProducts().subscribe(
            (data:any)=>{ for (const i of data ) {
                if(i.category == "men's clothing") this.productsCategory.push(i) ,this.displaySpinnercategory = true
                   console.log(this.productsCategory)}})
          break;
          case 'w':
           this.productsCategory = [];
            this._ProductsService.getAllProducts().subscribe(
            (data:any)=>{ for (const i of data ) {
                if(i.category == "women's clothing") this.productsCategory.push(i) ,this.displaySpinnercategory = true
                   console.log(this.productsCategory)}})
          break;
        default:
          // this.getAllProducts()
      }


       }
       addToCart(product:{}){
         this._ProductsService.addToCart(product);
         let x =  JSON.parse(localStorage.getItem('cart')!);
         console.log(x);
       }
}
