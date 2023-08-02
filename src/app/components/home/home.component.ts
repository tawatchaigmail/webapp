import { Component, inject ,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs';


import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../models/housinglocation';
import { HousingService } from '../../service/housing.service';

import {SelectivePreloadingStrategyService} from '../../service/selective-preloading-strategy.service';

import { CompanyComponent } from '../company/companyComponent';

@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [
    CommonModule,
    HousingLocationComponent,
    CompanyComponent,
  ],
  templateUrl: './home.component.html',


 // <app-housing-location   *ngFor="let housingLocation of housingLocationList"   [housingLocation]="housingLocation"> </app-housing-location>
 // 
 /*
           <input type="text" placeholder="Filter by city" #filter>
           <button class="primary" type="button" (click)="filterResults(filter.value)" > Search</button>
           <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>

 */ 
  /*
  template :  '   <input type="text" placeholder="Filter by city" #filter>   <button class="primary" type="button" (click)="filterResults(filter.value)" > Search</button>   <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>        '
  ,  
   */


  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

public modules? : string[];

housingLocationList: HousingLocation[] = [];
housingService: HousingService = inject(HousingService);

filteredLocationList: HousingLocation[] = [];

/*
constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
}
*/

/*
constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocations();
  this.filteredLocationList = this.housingLocationList;
}

*/


constructor(
 private route: ActivatedRoute,
 private preloadStrategy: SelectivePreloadingStrategyService

 ) {
  console.log('home component');
  this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
}

filterResults(text: string) {
  if (!text) {
    this.filteredLocationList = this.housingLocationList;
  }

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
  }

//    ngOnInit() {
//     this.modules = this.preloadStrategy.preloadedModules;
//  }
}