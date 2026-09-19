import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
           selector : 'ngx-bicycle-detail',
           templateUrl : './ifMenuDetails.component.html',
           styleUrls : ['./ifMenuDetails.component.scss']
})

export class IfMenuDetailsComponent implements OnInit {
   ngOnInit(){
    console.log('ifMenu detail componett');
   }
}