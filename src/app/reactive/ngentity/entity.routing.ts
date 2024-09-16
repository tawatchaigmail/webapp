import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {provideState} from '@ngrx/store' ;

import {reportFileMastersReducer} from '../../store/ngrx/reducers/reportFileMasters.reducer'; 
import {reportFileMastersFeatureKey} from '../../models/appFeature';
import {EntityComponent} from './components/entity.component';
import {ReportFileMastersComponent} from './components/reportFileMasters/reportFileMasters.component';

const routeStateRoute  : Routes = [
                                     {
                                        path : '',
                                        /*
                                        providers : [
                                                      provideState( {name : reportFileMastersFeatureKey, reducer : reportFileMastersReducer } )
                                                    ],
                                        */

                                        component : EntityComponent
                                     },
                                     {
                                        path : 'repfilmar',
                                        component : ReportFileMastersComponent
                                     }
                                  ];
@NgModule({
           imports   : [                       
                         RouterModule.forChild(routeStateRoute),
                       ],
           exports   : [RouterModule],
           providers : [],
})

export class EntityRouting {}

