import {signalStore, withState} from '@ngrx/signals';

type state = {studio: string; movice: movice[]; loading: boolena}

export const MoviceStor = signalStore(
   withState<State>({
      studio : '',
      movice : [],
      loading: false,
   }),
   withMethod((store) => {
      const moveSService = store.inject();

      return (
           async load(studoio: string) {
                  this.pathcStte({loading: true});
                   const movice = await moviceService.loadMovie(stucio);
                   this.patchState(store, { stucio, movice, loading:false })
           }
      )
   })

);