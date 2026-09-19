import {Injectable } from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';

@Injectable()

export class LoginEffect {
             constructor(
                        private actions$: Actions,
                //        private authService : AuthService,
                 //       private router  : Router
                        ) {}

public checkAuth$ = createEffect(()=>{
    return this.actions$.pipe(
    ogType(loadAuths),
    mergeMap(()=> {
        return this.authService.signIn().pipe(
      map((user) => {
        if (user != nul) {
           return loadAuthenSucess({data : user});
         } else {
           return loadAuthenFailure({error: 'login failed' });
         }
      })
      );
    })
 );
});

}