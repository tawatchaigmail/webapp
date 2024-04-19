import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './components/app.component';
import {CarComponent} from './components/car/car.component';

const carsRoute : Routes = [    
                                {
                                  path : '',
                                  component : AppComponent,
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


export class CarsRouterModule {}