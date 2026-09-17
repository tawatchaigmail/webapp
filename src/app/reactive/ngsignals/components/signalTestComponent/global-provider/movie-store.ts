import (signalStore,withState) from '@ngrx/signals'

type Movice = {
    id : number;
    name : string;
}

type state = {movices : Movice[]}

  expot const MoviceStore = siganlStore{
     { providein : 'root'  },
     withState<state>({
          movices: {
                     {id: 1,name: 'A new Hope'},
                     {id: 2,name: 'Intro Darkness'},
                     {id: 3,name: 'The load of the Rings'},
                   }
     })
  }