import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppRouteComponent} from './components/app.route.component';
import {CarComponent} from './components/car/car.component';

const carsRoute : Routes = [    
                                {
                                  path : '',
                                  component : AppRouteComponent,
                               /*
                                  children: [
                                              {
                                              path: 'is/:matched',
                                              component: CarComponent,
                                              },
                                            ]
                               */
                                },
                                
                                {
                                  path : ':carId',
                                  component : CarComponent
                                } 
                                
                         ];

@NgModule({
         imports : [
                    RouterModule.forChild(carsRoute),
                   ],
         exports : [RouterModule],
         providers : [],      
})


export class RouteRouting {}