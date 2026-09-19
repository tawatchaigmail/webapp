import {inject} from '@angular/core';
import {catchError, exhaustMap, map, of, tap} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {actorsService} from '../../../service/ngrx/actors.service';
import {ActorsPageActions} from '../actions/actors-page.actions';
import {ActorsApiActions} from '../actions/actors-api.actions';

export const loadActors = createEffect(
     (actions$ = inject(Actions), actorService = inject(actorsService)) => {
         return  actions$.pipe(
            ofType(ActorsPageActions.opened),
            exhaustMap(() => 
              actorService.getAll().pipe(
               map((actors) => ActorsApiActions.actorLosdSuccess({ actors })),
               catchError((error: { message: string }) =>
                 of (ActorsApiActions.actorLoadFailure({ errorMsg: error.message }))
              )
            )   
         )
       );
     },
     { functional: true }

);


export const displayErrorAlert = createEffect(
      () => {
          return inject(Actions).pipe(
            ofType(ActorsApiActions.actorLoadFailure),
            tap(({ errorMsg }) => alert(errorMsg))
          ) ;
      },
      { functional: true, dispatch: false }
      
);
