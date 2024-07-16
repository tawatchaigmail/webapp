import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import {StoreModule} from '@ngrx/store';
import {provideStore} from '@ngrx/store';
import {EffectsModule, provideEffects} from '@ngrx/effects';

import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

import {MoviceRouting} from './movies.routing';
import {MoviesEffects} from '../../store/ngrx/effects/movies.effects';                                      
// import {loadActors} from '../../store/ngrx/effects/actors.effects';
import * as actorsEffects from '../../store/ngrx/effects/actors.effects';

import {moviesReducer} from '../../store/ngrx/reducers/movie.reducer';
//import {moviesFeatureKey} from '../../models/ngrx/movieStateInterface';
import {moviesFeatureKey, actorFeatureKey} from '../../models/appFeature';

import {actorsReducer } from '../../store/ngrx/reducers/actor.reducer';
                                                       
import {AppMoviesComponent} from './components/appmovies.component';
//import {MoviePageServiceCompanent} from '.components//service.component/movies-page-service.component';
import {MoviesPageComponent} from './components/page.component/movie-page.component';
import {MoviesPageCombiningComponent} from './components/page-combining.component/movie-page-combining.component';
import {MoviesPageReadComponent} from './components/page-read.component/movie-page-read.component';
import {MovicesPageEfectCompanent} from './components/effect.componsent/movies-page-effects.component';
                                              
import {enviromentdevtools} from '../../environments/environments';

@NgModule({
           imports : [
                     CommonModule,
                     MoviceRouting,
                  

                     StoreModule.forFeature(moviesFeatureKey, moviesReducer),
                     StoreModule.forFeature(actorFeatureKey, actorsReducer),
                 //    StoreModule.forFeature( 'router' , routerReducer ),

                 //    Connects RouterModule with StoreModule, uses MinimalRouterStateSerializer by default
                 
                     
                     EffectsModule.forFeature(MoviesEffects, actorsEffects),
                  //   enviromentdevtools.imports, 
                     ],
           exports : [],
           
           providers : [
                 //      provideStore(),
                 //      provideEffects(MoviesEffects, actorsEffects) 
                 //      provideEffects(MoviesEffects, ) 
                       ],
           
           
           declarations : [
                           AppMoviesComponent, 
                      //     MoviePageServiceCompanent,
                           MoviesPageComponent,
                           MoviesPageCombiningComponent,
                           MoviesPageReadComponent, 
                      //     MovicesPageEfectCompanent
                          ]

})

export class MoviesModule {}


