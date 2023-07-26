import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
 selector : 'admin-com',
// standalone: true,
/*
 imports : [
            CommonModule
           ],
*/
 templateUrl : './admin.component.html',
 styleUrls : ['./admin.component.scss'],
 
}) 

export class AdminComponent implements OnInit {
           
    constructor(){} ;

  ngOnInit() : void {
  }
}
