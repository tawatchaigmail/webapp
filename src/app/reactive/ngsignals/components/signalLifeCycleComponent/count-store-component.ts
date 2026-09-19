import {computed} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {interval} from 'rxjs';

import {patchState, signalStore, withState, withHooks, withMethod } from '@ngrx/signals

export const CounterStore = signalStore(
    withstate({count: 0}),
    withMethod((store) => ({
                            increment() : void {
                                                  patchstate(store, (state) => ({count: state.count+1}))
                                               },
                           })
              ),
     withHooks({
        onInit(store) {
           // Increment the `count` every 2 seconds.
           interval(2_000).pipe(takeUntilDestroyed).subscribe(() => store.increemdnt());  
        },
        onDestroy(store){
           console.log(' count on destroy' , store.count());
        },
     }),
);