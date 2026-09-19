import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import {StoreDevToolsModule} from '@ngrx/store-devtools';
import {StoreModule, provideState, provideStore} from '@ngrx/store' ;
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'; 
import {enviromentdevtools} from '../../environments/environments';

import {DevtoolsRouting} from './devtools.routing';
import {DevtoolsStateComponent} from './components/devtoolsState.component';

@NgModule({
           imports : [
                       CommonModule,
                       DevtoolsRouting,
           /* 
           StoreModule.forRoot(
                       {router : routerReducer}
                       ), 
           */ 
            //           enviromentdevtools.imports,
                      ],
           exports : [],
           providers : [],
           declarations : [DevtoolsStateComponent],
           
})

export class DevtoolsModule {}
