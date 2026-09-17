import {CreateReducer, on } from '@ngrx/store'
import {AuthApiAction} from './auth/actions'
import {authAction} from './auth/action'
import {User} from './auth/mocel' 

export const statusFeatureKey = 'staus' ;

export interface State {
    user : USer | null;
}

export const initialState : State = {
     user : null;
}

export const reducer = createReducer(
 initaslState,
  on(AuthApiActin.loginSucss, (state,{user}) -> ({...state, user})),
  on(AuthSction.logout, () => initialState)
)

 export cost getUsr = (state:State) => state.user;