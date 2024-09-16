import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule ,Validators,ControlContainer,FormGroup,FormControl,NgForm} from '@angular/forms';
//import {RouterLink, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';

import {ReportFileMastersComponent} from './reportFileMasters/reportFileMasters.component';
//import {ReportFileMasterDetailsComponent} from './components/reportFileMasterDetail/reportFileMasterDetail.component';

@Component({
           selector : 'ngx-app-entity',
           templateUrl : './entity.component.html',
           styleUrls : ['./entity.component.scss'],
           standalone: true,   
           imports : [
           //           RouterLink, 
           //           RouterOutlet,
                      ReportFileMastersComponent,
                     ],
})

export class EntityComponent implements OnInit {
 
   ngOnInit(){
    console.log('entity componett');
   }
}
