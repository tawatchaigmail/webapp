import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule,routerReducer} from '@ngrx/router-store';

import {CustomSerializer} from './custom-route-serializer';
import {CarsRouterModule} from './cars-routing.module';
import {reducer} from '../../store/ngrx/reducers/cars.reducer';

import {AppComponent} from './components/app.component';
import {CarComponent} from './components/car/car.component';

@NgModule({
  imports: [
           CommonModule,           
           StoreModule.forRoot({ cars: reducer, router: routerReducer }),
           CarsRouterModule,
           StoreRouterConnectingModule.forRoot(
                                              // { serializer: CustomSerializer}
                                               )
           ],
  declarations : [AppComponent,CarComponent],
  
})
export class CarsModule {}
