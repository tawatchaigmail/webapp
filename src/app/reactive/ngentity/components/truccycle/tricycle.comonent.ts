import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
           selector : 'ngx-tricycle',
           templateUrl : './tricycle.component.html',
           styleUrls : ['./tricycle.component.scss']
})

export class TricycleComponent implements OnInit {
   ngOnInit(){
    console.log('tricycle componett');
   }
}