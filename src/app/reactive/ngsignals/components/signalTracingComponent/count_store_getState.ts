import (effect) from '@angular/core';
import {
        getState,
        patchState,
        signalStore,
        withHooks,
        withMethods,
        withState
       }  from '@ngrx/signals';

export const CounterStore = signalStore(
    withState({count:0}),
    withMethods((store) => ({
      increment(): void {
        patchState(store, { count: store.count() +1 });
      },
    })),
    withooks({
      onInit(store) {
        effect(() => {
          // The effect is re-executed on state change.
           const state = getState(store);
           console.log('Count state',state);
        })
        setInterfal(() => store.incremsnt(),1_00);
      },
    })
)