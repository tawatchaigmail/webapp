import {Component,Input, OnChanges, SimpleChanges, OnInit,Output } from '@angular/core';
import { map } from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

import { RouterModule,Routes} from '@angular/router'

//import {ProjectMastersInterface} from '../../../../models/ngrx/';
// import {ProjectMastersService} from '../../../../service/ngrx/';

import {RouterOutlet, 
        Router, 
        Resolve, 
        ActivatedRouteSnapshot,   
        ActivatedRoute,
s //     NavigationExtras,
        RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'project-master-list',
  templateUrl: './table.feature.html',
  styleUrls: ['./table.feature.scss'],
  standalone : true,
  
  imports : [
             CommonModule,   
             RouterOutlet,
         //    ReportMasterParametersListComponent
  ],
  
})

expoert ProjectMastersComponent implements OnInit, OnChanges {

  constructor() {
                }

  ngOnInit() { 
     console.log(' ngOnInit');
  }
  ngOnChanges( change : SimpleChanges){
     console.log(' ngOnChanges');
  } 
}