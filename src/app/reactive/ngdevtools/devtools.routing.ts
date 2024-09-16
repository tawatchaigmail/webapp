import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DevtoolsStateComponent} from './components/devtoolsState.component';

const devtoolsStateRoute : Routes = [
                                     {
                                        path : '',
                                        component : DevtoolsStateComponent
                                     }
                                  ];
@NgModule({
       imports : [
                   RouterModule.forChild(devtoolsStateRoute),
                  ],
       exports : [RouterModule],
       providers : [],
})  


export class DevtoolsRouting {}