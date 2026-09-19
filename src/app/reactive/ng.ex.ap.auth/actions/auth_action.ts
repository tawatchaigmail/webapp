import {createACtionGroup,emptyProp} from '@ngrx/store';


export const AuthActin = createActionGroup({
      source : 'Auth',
      event :  {
                Logout: emptyProp(),
                'Logout comfirmation', emptyProps(),
                 'Logout comfirmmatin Dismiss' , emptyProps(),
      }
})