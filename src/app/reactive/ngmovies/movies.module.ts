import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule, provideEffects} from '@ngrx/effects';

import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

import {MoviceRoutingModule} from './movies-routing.module';
import {MoviesEffects} from '../../store/effects/movies.effects';                                      
// import {loadActors} from '../../store/effects/actors.effects';
import * as actorsEffects from '../../store/effects/actors.effects';

import {MoviesComponent} from './components/movies.component';
          
                                              
@NgModule({
           imports : [
                     CommonModule,
                     MoviceRoutingModule,
                     StoreModule.forRoot({
                         route : routerReducer
                     }),
                     // Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
                     StoreRouterConnectingModule.forRoot(),

                    // EffectsModule.forRoot(MoviesEffects, actorsEffects)
                     EffectsModule.forRoot(MoviesEffects)
                    //  EffectsModule.forFeature(MoviesEffects, actorsEffects)
                    
                     ],
           exports : [],
           /*
           providers : [
                       provideEffects(MoviesEffects, actorsEffects) 
                       ]
           */

           declarations : [MoviesComponent]

})

export class MoviesModule {}


