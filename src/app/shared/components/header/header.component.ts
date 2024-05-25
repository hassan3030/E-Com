import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _ProductsService:ProductsService ) { }
  cartsProducts:any;
  ngOnInit(): void {
    this.cartsProducts = this._ProductsService.cartsProducts;
  }

}
