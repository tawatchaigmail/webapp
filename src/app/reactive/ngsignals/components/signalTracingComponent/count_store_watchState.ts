import (effect) from '@angular/core';
import {
        getState,
        patchState,
        signalStore,
        watchState,
        withHooks,
        withMethods,
        withState,
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
         watchState( store, (state) => {
            console.log('[watchState] count state ',state);
         }); // logs: { count: 0 }, { count: 1 }, { count: 2 }
         effect(() => {
            cosole.log('[effect] count state',getState(store));
         });
       store.imcrement();
       store.increment();
     },
    }),
);