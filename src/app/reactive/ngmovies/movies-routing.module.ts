import {NgModule } from '@angular/core';
import {provideEffects} from '@ngrx/effects';

import {RouterModule,Routes} from '@angular/router';

import {MoviesEffects} from '../../store/ngrx/effects/movies.effects';
import * as actorsEffects from '../../store/ngrx/effects/actors.effects';

import {MoviesComponent} from './components/movies.component';
import {MoviesPageComponent} from './components/page.component/moivce-page.component';
import {MovicesPageEfectCompanent} from './components/effect.componsent/movies-page-effects.component';

export const moviesRoutes : Routes = [
                                     /*
                                     {
                                      path : '',
                                      component : MovicesPageEfectCompanent,
                                     },
                                     */  
                                     {
                                      path : '',
                                      component : MoviesPageComponent,
                                     },
 
                                     /* 
                                     {
                                      path : 'movies',
                                      component : MoviesComponent,
                                     }
                                     */ 

                                     ];


@NgModule({
          imports : [
                     RouterModule.forChild(moviesRoutes)
                    ],
          exports : [RouterModule],
       
    
})


export class MoviceRoutingModule {}