import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Params, Route} from '@angular/router';
import {selectCar} from  '../../../../store/ngrx/selector/cars.selectors' ;

import {
        selectCurrentRoute,
        selectFragment,
        selectQueryParams,
        selectRouteParams,
        selectUrl,
        selectTitle
       } from '../../../../store/ngrx/ngrx-router/router.selectors';


@Component({
     selector : 'com-car',
     templateUrl : './car.component.html' ,
     styleUrls : ['./car.component.scss']
})

 export class CarComponent implements OnInit {

     car$ = this.store.select(selectCar);
     currentRoute  : Route | undefined;
     url          : string | undefined;
     fragment     : string | undefined;
     title        : string | undefined;
     queryParams  : Params | undefined;
     routeParams : Params | undefined;
     
     constructor(private store : Store) {}

      ngOnInit(){
          console.log(' child ngOnInit CarComponent');

          this.store.select(selectCurrentRoute).subscribe(currentRoute => this.currentRoute = currentRoute);
          this.store.select(selectUrl).subscribe(url => this.url = url);
          this.store.select(selectFragment).subscribe(fragment => this.fragment = fragment);
          this.store.select(selectTitle).subscribe(title => this.title = title);
          this.store.select(selectQueryParams).subscribe(queryParams => this.queryParams = queryParams);
          this.store.select(selectRouteParams).subscribe(routeParams => this.routeParams = routeParams);

          console.log(' child currentRoute : '+this.currentRoute);
          console.log(' child url '+this.url);
          console.log(' child fragment '+this.fragment);
          console.log(' child title '+this.title);
          console.log(' child queryParams '+this.queryParams);
          console.log(' child routerParams '+this.routeParams);

     }
}
