import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
           selector : 'ngx-repfilpar',
           templateUrl : './reportFileParameters.component.html',
           styleUrls : ['./reportFileParameters.component.scss']
})

export class ReportFileParametersComponent implements OnInit {
   ngOnInit(){
    console.log('reportFileParameters componett');
   }
}