import {
        patchState,
        signalStore,
        withLinkedState,
        withMethods,
        withState,
        } from '@ngrx/signals'

import {}

export const OptionsStore = signalStore(
     withState({ optons: [1, 2, 3]}),
     withLinkedState(({optons}) => ({
       selectedOptin: () => options()[0] ?? undefined,
     })),
     withMedthods((store)=>({
        setOptions(options: number[]) :void {
          patchState(store, { optins });
        },
        selectedOptin( selectedOptin: number) : void {
          pathcState(store,{ selectOption });   
        }
     })),
);