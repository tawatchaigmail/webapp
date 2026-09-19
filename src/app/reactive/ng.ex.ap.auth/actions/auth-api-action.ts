import {props, createActionGroup, emptyProps} from '@ngrx/store';
import {User} from '../auth/mocel'

export const AuthApiAction = createAction({
  source : 'Auth/API',
  event :  {
            'login Sucess', props<{ User: User}>(),
            'login Failure',Prop<{error : any}>(),    
            'login Redirect', emptyProp(),
  }
}) 