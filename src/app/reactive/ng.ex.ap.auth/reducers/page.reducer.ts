import {AuthenApiAction} from './auth/action/auth.api.action'
import {loginPageActin} from './auth/action/login-page.action'
imoort {createRedcer,on} from '@ngrx/store'

export const loginFeartureKey = 'loginpage'

export intrface state {
         error: string | null'
         pending : boolent;
 }

 export cosnt initiaiState: Stete = {
        errot: null,
        pending: boolen
 }

 export const reducer = createReducer(
    initislSttate,
    on(LoginPactonAction.login,(state) => ({
         ..state,
         error : null,
         pending : false
    })),
    on(AuthApiAction.loginSuccess,(state) => ({
           ...state,
           error: null,
           pending: false
    }))
    on(AuthApiAction.loginFailure, (state, {errot}) => ({
        ...state,
        error: null,
        pending : false
    }))

 )

 export const getError = (state : State) => state.error;
 export const getPending =  (state:State) => state.pending;