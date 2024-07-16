import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EntityComponent} from './components/entity.component';
//import {ReportFileMastersComponent} from './components/reportFileMasters/reportFileMasters.component';

const routeStateRoute  : Routes = [
                                     {
                                        path : '',
                                        component : EntityComponent
                                     }
                                  ];
@NgModule({
           imports : [
                       RouterModule.forChild(routeStateRoute),
                     ],
           exports : [RouterModule],
           providers : [],
})

export class EntityRouting {}