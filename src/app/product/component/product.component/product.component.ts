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
    templateUrl : './product.component.html' ,
    styleUrls : ['./product.component.scss'],
})

export class AdminProductComponent implements OnInit{
  constructor(){} ;

  ngOnInit() {
  };
}