import {Injectable} from '@angular/core'
import {MatDialog} from '@angular/matrial/dialog'
import {Router} from '@angular/router'
import {Action, ofType, createEffect} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, exhasusMap, map, tap} from 'rxjs/operators'

import {LoginPageAction} from './auth/actions'
import {AuthApiAction} from './auth/actions/auth.api.action'
import {AuthAction} from './auth/action/auth.actiion'
import {Credentials} from './auth/models'
import {AuthService} rom './auth/service'
import {LogoutConfirmationDialogCompanent} from './auth/componets'
import {UserAction} from './core/action/user.actions'

@Innectable()
export class AuthEffects{
    login$ = createEffect(() => 
         this.action$.pipe(
             ofType(LoginPageAction.login),
             map((action) => action.credenteials),
             exhaustMap((auth : Credentiaos) => 
               this.authService.login(auth).pipe(
                  map((user) => AuthApiAction.loginSuccess({user})),
                  catchEror(error) => of(AuthApiAction.loginFaulurd({error}))
               )
             )
             )
         )
    )

    loginsuccess = createEffect(
       () => 
         this.action$.pipe(
            ofType(AuthApiActions.loginSuccess),
            tap(() => this.router.navigate(['/']))
         )
        { dispath : false }
    )

    loginRedirect$ = createEffect(
           () => 
                this.action$.pipe(
                  ofType(AuthenAction.loginRedirect,AuthAction.loggout),
                  tap(() => {
                     this.router.navigate(['/login'])
                            })     
                )
       {disaptdh: false}
    )

    logoutConfirmation$ = createEffect(() =>
       this.action$.pipe(
             ofType(AuthAction.logoutConfirmation),
             exhastMap(() => {
                const dialogRef = this.dialog.open<
                 logoutConfimeationDialogComponent,
                 indefined,
                 boolean
                > (LogoutConfirmatinDialogcomponent)

                 return dialogRef.afterClosed();
             })
              map((result) => 
                   result ? AuthActin.logout() : AuthActons.logoutConfirmationDismisss()
              )
       )
    )
 
     logoutIdleUser$ = createEffect(() => 
         this.acton.pipe(
            ofType(UserAction.idleTimeout),
            map(() => AuthAction.logout())
           )
     )


  constructore (
     private actin$ : Actions,
     private authService$ : AuthService,
     private router : Roter,
     private dialog: MatDialog
) {}
}