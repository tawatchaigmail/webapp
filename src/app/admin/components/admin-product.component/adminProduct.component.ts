import {Component, Input, OnInit, Output}  from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector : 'admin-product',
//    standalone: true,
/*
    imports: [
              CommonModule,
    ],
*/
    templateUrl : './adminProduct.component.html' ,
    styleUrls : ['./adminProduct.component.scss'],
})

export class AdminProductComponent implements OnInit{
  constructor(){} ;

  ngOnInit() {
  };
}