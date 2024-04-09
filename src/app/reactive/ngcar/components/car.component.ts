import {Component} from '@angular/core';
import {Store} from '@angular/store';
import {selecCar} from  '../store/selector/car.selectors' ;

@Component({
     selector : 'app-car',
     templaterl : './car.component.html' ,
     styleUrl : ['./car.component.scss']
})

export class CarComponent {
     car$ = this.store.select(selectCar);
     constructor(privare store : Store) {}
}