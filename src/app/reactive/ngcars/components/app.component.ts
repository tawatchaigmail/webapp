import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectCars} from  '../../../store/ngrx/selector/cars.selectors' ;
import {appInit} from '../../../store/ngrx/actions/car.action';

@Component({
     selector : 'app-cars',
     templateUrl : './app.component.html' ,
     styleUrls : ['./app.component.scss']
})

export class AppComponent implements OnInit {     
     cars$ = this.store.select(selectCars);
     constructor(private store : Store) {}

      ngOnInit(){
          console.log('ngOnInit AppComponent');
          this.store.dispatch(
             appInit({
                      cars : [
                               {id : '0' , make : 'ford' , model : 'mustang' , year : '2001'  },
                               {id : '1' , make : 'ford' , model : 'mustang' , year : '2003'  },
                               {id : '2' , make : 'ford' , model : 'mustang' , year : '1978'  },
                               {id : '3' , make : 'ford' , model : 'mustang' , year : '1976'  },
                             ],
                    })
          ); // dispatcha
     }
}
