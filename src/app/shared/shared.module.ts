import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    SelectCategoryComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports : [
    BrowserModule ,
    RouterModule,
    FormsModule,
    HeaderComponent,
    SelectComponent,
    SpinnerComponent,
    SelectCategoryComponent
  ]
})
export class SharedModule { }
