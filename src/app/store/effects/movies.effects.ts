import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {EMPTY} from 'rxjs';
import {map,exhaustMap,catchError} from 'rxjs/operators'; 

import {MoviesService} from '../../service/movies.service';
                                           
@Injectable()

export class MoviesEffects { 
   loadMovies$ = createEffect(() => 
       this.actions$.pipe(
       ofType('[Movies Page] load Movies'),
       exhaustMap(() => this.moviesService.getAll()
       .pipe(
          map(movies => ({ type : '[Mocice API] movies Loaded Success ', payload: movies })),

       //  catchError(() => EMPTY)
         catchError(() => of( {type: '[Movies API] Movices Loaded Error' } ))
        )
     )
  )
); 

  constructor(
      private actions$: Actions,
      private moviesService: MoviesService
                             
   ){}
}