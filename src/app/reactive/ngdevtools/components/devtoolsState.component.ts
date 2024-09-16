import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
           selector : 'ngx-devtools',
           templateUrl : './devtoolsState.component.html',
           styleUrls : ['./devtoolsState.component.scss']
})

export class DevtoolsStateComponent implements OnInit {
   ngOnInit(){
    console.log('devtools componett');
   }
}