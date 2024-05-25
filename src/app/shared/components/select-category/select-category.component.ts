import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';




@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.scss']
})
export class SelectCategoryComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() display:boolean = true; 
  @Output() getProducts = new EventEmitter();
  @Output() getCustomProduct  = new EventEmitter();
  runGetProducts(){
   this.getProducts.emit();
  }
  runGetCustomProduct(){
 this.getCustomProduct.emit();
  }
}
