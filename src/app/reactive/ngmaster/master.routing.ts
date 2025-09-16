import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MasterComponent}  from './components/master.component';

const masterRoutes : Routes = [
                              { path : '', 
                                component : MasterComponent
                              }
                            ]

@NgModule({
               imports : [
                         RouterModule.forChild(masterRoutes)
                         ],
               exports : [RouterModule],
               providers : [],
})

export class MasterRouting {}