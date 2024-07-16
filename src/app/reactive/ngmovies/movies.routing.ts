import {NgModule } from '@angular/core';
import {provideEffects} from '@ngrx/effects';

import {RouterModule,Routes} from '@angular/router';

import {MoviesEffects} from '../../store/ngrx/effects/movies.effects';
import * as actorsEffects from '../../store/ngrx/effects/actors.effects';

import {AppMoviesComponent} from './components/appmovies.component';
import {MoviesPageComponent} from './components/page.component/movie-page.component';
import {MoviesPageCombiningComponent} from './components/page-combining.component/movie-page-combining.component';
import {MoviesPageReadComponent} from './components/page-read.component/movie-page-read.component';
import {MovicesPageEfectCompanent} from './components/effect.componsent/movies-page-effects.component';


export const moviesRoutes : Routes = [
                                     /*
                                     {
                                      path : '',
                                      component : MovicesPageEfectCompanent,
                                     },
                                     */  

                                     {
                                      path : 'compage',
                                      component : MoviesPageComponent,
                                     },
 
                                     {
                                      path : 'comreadpage',
                                      component : MoviesPageReadComponent,
                                     },
                                     {
                                      path : 'combinepage',
                                      component : MoviesPageCombiningComponent,
                                     },

                                      
                                     {
                                      path : '',
                                      component : AppMoviesComponent,
                                     }
                                      

                                     ];


@NgModule({
          imports : [
                     RouterModule.forChild(moviesRoutes)
                    ],
          exports : [RouterModule],
       
    
})


export class MoviceRouting {}