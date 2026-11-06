import {Component,Input, OnChanges, SimpleChanges, OnInit,Output } from '@angular/core';
import { map } from 'rxjs';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';

import {RouterModule,Routes} from '@angular/router'

// import {ProjectMastersInterface} from '../../../../models/ngrx/projectMastersInterface';

import {ProjectMastersService} from '../../../../service/ngrx/projectMasters.service';

import {RouterOutlet, 
        Router, 
        Resolve, 
        ActivatedRouteSnapshot,   
        ActivatedRoute,
 //     NavigationExtras,
        RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'project-master-list',
  templateUrl: './table.project.master.feature.html',
  styleUrls: ['./table.project.master.feature.scss'],
  standalone : true,
  
  imports : [
             CommonModule,   
             RouterOutlet,
  ],
  
})

export class ProjectMastersComponent implements OnInit {

  constructor(
              private route : ActivatedRoute  , 
              private http : HttpClient ,
              private projectMastersService : ProjectMastersService
              ) {
                }

  ngOnInit() { 
     console.log(' ProjectMastersComponentt ngOnInit');
  }
  ngOnChanges( change : SimpleChanges){
     console.log(' ProjectMastersComponentt ngOnChanges');
  } 
}