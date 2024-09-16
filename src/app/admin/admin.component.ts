import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, ActivatedRoute ,ParamMap} from '@angular/router';

// import {AuthService} from '../service/auth/authService'; 

@Component({
 selector : 'admin-com',
 templateUrl : './admin.component.html',
 styleUrls : ['./admin.component.scss'],
 
}) 

export class AdminComponent implements OnInit {
           
    constructor(
    //            private authService : AuthService,
    //            private route : ActivatedRoute ,
              ) {

    } ;

  ngOnInit() : void {
  }
}
