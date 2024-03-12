import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {LoginStateComponent} from './components/loginstate.component';
import {LoginStateRouterModule} from './loginstate-routing.module'
import {reducer } from '../store/reducers/reducer';
import {countReducer} from '../store/reducers/count.reducer';
import {authFeatureKey} from '../models/authFeature';


@NgModule({
  imports : [
             CommonModule,
             LoginStateRouterModule,
             StoreModule.forRoot({}), 
             StoreModule.forRoot({count : countReducer}),
             StoreModule.forFeature(authFeatureKey,reducer)
            ],
  exports : [],
  providers : [],            
  declarations : [LoginStateComponent]
})

export class LoginstateModule {}