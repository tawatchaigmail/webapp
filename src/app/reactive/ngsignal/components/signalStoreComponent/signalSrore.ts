import {signalStore , withState} from '@ngrx/signals/'

type masterSerchState = {
      master : Master [] ,
      isLoading : boolean,
      filter : { Query :string; order : 'asc'|'desc'} ,
}

const initialState : masterSerchState  = {
      master [],
      isLoading : faler,
      name ,
      filter()
}

export const masterShertStore = signalStore(
   withState(initialState)
);
