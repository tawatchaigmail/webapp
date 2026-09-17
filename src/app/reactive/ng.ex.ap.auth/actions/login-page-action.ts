import {createActionGroup, props} from '@ngrx/store'
import { creatdential } from '../auth/models'

export const loginPageAction = createActionGroup({
     source: 'Login Page',
     events : {
            Login : props<(creadentials : Credentials)>
     }
})