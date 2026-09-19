import {createReducer,Action, on} from '@ngrx/store';

import {loadAuths,loadAuthsSuccess,loadAuthsFailure} from '../actions/action';
import {UserState} from '../../models/stateInterface' ;
import {User} from '../../models/userInterface';

export const initialState : UserState = {
                user : { 
                         Name : '' ,
                         Email : '',
                         Gender : '',
                         Phone : ''
                        },
                loading : false ,
                error : 'null'
       } ;

export const countStateReducer = createReducer<UserState,Action>(
   initialState,
   on(loadAuths, (UserState,Action) => ({
   ...UserState,
   loading : true,
   })),
   on(loadAuthsSuccess, (UserState, Action) => ({
   ...UserState,
   loading : false,
   usr : Action.data,
   })),
   on(loadAuthsFailure, (UserState, Action) => ({
   ...UserState,
   loading : false,
   error: Action.error,
   }))
)