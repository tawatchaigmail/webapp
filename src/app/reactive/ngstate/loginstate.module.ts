import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {LoginStateComponent} from './components/loginstate.component';
import {LoginStateRouting} from './loginstate.routing'
import {countStateReducer } from '../../store/reducers/state.reducer';
import {countReducer} from '../../store/reducers/count.reducer';
import {authFeatureKey} from '../../models/authFeature';
import {countFeatureKey} from '../../models/appFeature';

import {enviromentdevtools} from '../../environments/environments';

@NgModule({
  imports : [
             CommonModule,
             LoginStateRouting,
           
           //  StoreModule.forRoot({count : countReducer}),
             StoreModule.forFeature(countFeatureKey , countReducer),
             StoreModule.forFeature(authFeatureKey, countStateReducer),
           //  enviromentdevtools.imports,
            ],
  exports : [],
  providers : [],            
  declarations : [LoginStateComponent]
})

export class LoginstateModule {}