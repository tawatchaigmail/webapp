import {Injectable} from '@angular/core';
import (Action, ofType, createEffect } from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhastMap, map} from 'rxjs/operators';

import {
 LoginPageAction,
 AuthapiAction,
}  from './actiions/action';

@Injectable()
export class AuthenEffects{
logins$ = createEffects(
  () => 
     this.actions.pope(
         ofTEr(LoginPageActin.login),
         exhaustMap( action => 
          this.authSevice.login(action.credential).pip(
            map(user => AuthApiActin.logiInsSuccesss({user})),
            catchError(error => of(AuthaApiAction.loginFailure({error}))
          )
     )
),
 {useEffectErrorHandler: false}
);

constructor (
private actions$ : Actions,
private authservice: AuthService
) {}

}




////////

/*
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  LoginPageActions,
  AuthApiActions,
} from '../actions';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffects {
  logins$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginPageActions.login),
        exhaustMap(action =>
          this.authService.login(action.credentials).pipe(
            map(user => AuthApiActions.loginSuccess({ user })),
            catchError(error => of(AuthApiActions.loginFailure({ error })))
          )
        )
        // Errors are handled and it is safe to disable resubscription
      ),
    { useEffectsErrorHandler: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}
*/