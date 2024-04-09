import {NgModule } from '@angular/core';
import {provideEffects} from '@ngrx/effects';

import {RouterModule,Routes} from '@angular/router';

import {MoviesEffects} from '../../store/effects/movies.effects';
import * as actorsEffects from '../../store/effects/actors.effects';

import {MoviesComponent} from './components/movies.component';

export const moviesRoutes : Routes = [
                                     {
                                      path : 'movies',
                                      component : MoviesComponent,
                                     }
                                     ];

@NgModule({
          imports : [
                     RouterModule.forChild(moviesRoutes)
                    ],
          exports : [RouterModule],
    //      providers : [ provideEffects(MoviesEffects,actorsEffects)  ]
    
})


export class MoviceRoutingModule {}