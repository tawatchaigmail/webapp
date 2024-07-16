import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
// import {Observable,of} from 'rxjs';
//import {Params, Route} from '@angular/router';

import {Car} from '../../../models/ngrx/carInterface'
import {selectCars, selectCar} from  '../../../store/ngrx/selector/cars.selectors' ;
import {appInit} from '../../../store/ngrx/actions/car.action';

/*
import {
        selectCurrentRoute,
        selectFragment,
        selectQueryParams,
        selectRouteParams,
        selectUrl,
        selectTitle
       } from '../../../store/ngrx/ngrx-router/router.selectors';
*/
@Component({
     selector : 'ngx-app-route',
     templateUrl : './app.route.component.html' ,
     styleUrls : ['./app.route.component.scss']
})

export class AppRouteComponent implements OnInit {     

     cars$ = this.store.select(selectCars);
     title : string | undefined;
     constructor(private store : Store) {
            console.log('constructor store');
            console.log(this.store);
           // console.log('cars$');
           // console.log(this.cars$);
     }

      ngOnInit(){
          console.log('ngOnInit AppCar Component');
          this.title = 'NgRxRoute' ;
          this.store.dispatch(
             appInit({
                      cars : [
                               {id : '0' , make : 'ford' ,       model : 'mustang0' , year : '2001'  },
                               {id : '1' , make : 'jonedee' ,    model : 'gtx1' , year : '2003'  },
                               {id : '2' , make : 'newholland' , model : 'TS90' , year : '1978'  },
                               {id : '3' , make : 'caterpilar' , model : 'cat312E' , year : '1976'  },
                             ],
                    })
          ); 
          
         // dispatcha





                //    console.log('cars$ init '+this.cars$);
     }
}
