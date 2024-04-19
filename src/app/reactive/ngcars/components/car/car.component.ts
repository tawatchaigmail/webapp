import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectCar} from  '../../../../store/ngrx/selector/cars.selectors' ;

@Component({
     selector : 'app-car',
     templateUrl : './car.component.html' ,
     styleUrls : ['./car.component.scss']
})

 export class CarComponent implements OnInit {

     car$ = this.store.select(selectCar);
     
     constructor(private store : Store) {}

      ngOnInit(){
          console.log('ngOnInit CarComponent');
     }
}