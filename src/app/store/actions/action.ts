import {createAction,props} from '@ngrx/store';
import {User} from '../../models/userInterface';

export const loadAuths = createAction('[Auth] Load Auths');
export const loadAuthsSuccess = createAction(
               '[Auth] Load Auths Success',
                props<{data: User}> ()
             );
export const loadAuthsFailure = createAction(
              '[Auth] Load Auths Failure',
               props<{error:string}>()
             );
