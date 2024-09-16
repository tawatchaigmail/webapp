import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
           selector : 'ngx-bicycle-detail',
           templateUrl : './bicycleDetail.component.html',
           styleUrls : ['./bicycleDetail.component.scss']
})

export class BicycleComponent implements OnInit {
   ngOnInit(){
    console.log('bicycle detail componett');
   }
}