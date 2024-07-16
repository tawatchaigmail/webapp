import {Injectable} from '@angular/core';
import {Actions,
       // Effect,
        createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {EMPTY} from 'rxjs';
import {map,exhaustMap, catchError} from 'rxjs/operators'; 

import {MoviesService} from '../../../service/ngrx/movies.service';
import {MoviesPageActions, } from '../actions/movies-page.actions' ;
import {MoviesApiActions, } from '../actions/movies-api.actions' ;
                                           
@Injectable()

export class MoviesEffects { 
  // @Effect()
   loadMovies$ = createEffect(() => 
       this.actions$.pipe(

    //   ofType('[Movies Page] Load Movies'),
       ofType(MoviesPageActions.loadMovies),
       exhaustMap(() => this.moviesService.getAll()
       .pipe(
      //    map(movies => ({ type : '[Movies API] Movies Loaded Success ', payload: movies })),
          map((movies) => MoviesApiActions.movieLosdSuccess({ movies })),
      

       //  catchError(() => EMPTY)
       //  catchError(() => of( {type: '[Movies API] Movies Loaded Error' } ))
         catchError((error: { message: string }) => of(MoviesApiActions.movieLoadFailure({ errorMsg: error.message })))   
        )
     )
  )
); 

  constructor(
      private actions$: Actions,
      private moviesService: MoviesService
                             
   ){}
}
