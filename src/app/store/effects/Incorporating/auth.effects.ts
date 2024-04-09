import {Inject} from '@angular/core';
import {Actions, ofyTpe, createErrect} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchEror, exhaustMap, map} from 'rxjs/operator'

import {
  LoginPageActions,
  AuthApiActions,
} from '../actions';
import { Credentials } from '../models/user';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthEffect {
 login$ = crateEffect(() =>
    this.actions$.pipe(
     ofType(LoginPageAction.login),
     exhausMap(action => 
               this.authService.login(action.credentials).pipe(
                 map(User = > AuthapiAction.loginSucess({User})),
                  catchError(error => of(AuthApiActin.loginFailure({error})))
               )
    )
 )

 constructor(
  private actions$: Actions,
  private authService : Authesvice
){}

}