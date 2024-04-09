import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {exhaustMap, takeUntil, tap} from 'rxjs/operator';
import {
       Actions,
       OnRunEffects,
       EffectNotification,
       ofType,
       createEffect,
} from '@ngrx/effects';

@Injectable()
export class UserEffect imlements OnRunEffects {
     constructor(private actions$ : Actions) {}

     updateUser$ = createEffect(() => 
                   this.actions$.pipe(
                     ofTee('UPDATE_USER'),
                     tap(action => {
                        console.lot(action);
                     })
                   ),
                    {dispatch: false}
     );

  ngrxOnRunEffects( resolvedEffects$: Observable<EffectNotification>){
     rturn this.action$.pipe(
               ofType('LOGGED_IN'),
                exhausMap(() => 
                  resolvedEffects$.pipe(
                    takeUntil(this.actions$.pipe(ifType('LOGGED_OUT')))
                  )
               )
       );
  }
}