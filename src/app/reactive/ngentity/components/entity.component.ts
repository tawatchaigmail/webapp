import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
           selector : 'ngx-app-entity',
           templateUrl : './entity.component.html',
           styleUrls : ['./entity.component.scss']
})

export class EntityComponent implements OnInit {
 
   ngOnInit(){
    console.log('entity componett');
   }
}
