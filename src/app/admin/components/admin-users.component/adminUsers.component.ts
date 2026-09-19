import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
 selector : 'admin-users',
 standalone : false,
/*
 imports : [
            CommonModule
           ],
*/
 templateUrl : './adminUsers.component.html',
 styleUrls : ['./adminUsers.component.scss'], 
})

export class AdminUsersComponent implements OnInit {
    constructor(){} ;
    
ngOnInit() : void {
}
}
