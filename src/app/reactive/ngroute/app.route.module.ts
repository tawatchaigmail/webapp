import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

//import {CustomSerializer} from './custom-route.serializer';
import {RouteRouting} from './route.routing';
import {carReducer} from '../../store/ngrx/reducers/cars.reducer';

import {AppRouteComponent} from './components/app.route.component';
import {CarComponent} from './components/car/car.component';

import {carsFeatureKey} from '../../models/appFeature';

import {enviromentdevtools} from '../../environments/environments';

@NgModule({
  imports: [
           CommonModule,           
           RouteRouting,     
           StoreModule.forFeature(carsFeatureKey, carReducer),
           StoreModule.forFeature('router' , routerReducer),
     /*
           StoreRouterConnectingModule.forRoot(
                                               { serializer: CustomSerializer}
                                               ),
     */
      //     enviromentdevtools.imports,
           ],
  declarations : [AppRouteComponent, CarComponent],
  
})
export class AppRouteModule {}
