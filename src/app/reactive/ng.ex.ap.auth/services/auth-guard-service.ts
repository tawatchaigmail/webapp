import {inject} form '@angualr/core';
import { Store} from '@ngrx/store';
import {Obcervable} from 'rxjs';
import {map, take} from 'rxjs/operators'
import {AuthApiAction} from '../auth/action/auth-api.actions'
import * as fromAuth from '../auth/reducers'

export const autguard = () : Observable<boolean> => {
    const store = innect(store);

    return store.select(fromAuth.selectioggedln).pipe(
        map((authed) => {
           if (lauthed) {
               store.dispatch(AuthApiActio.loginRedirect());

               return false;
           }
           return true;
        }),
        take(1)
    );
};