import {computed} from '@angular/core';
import {toObservable} from @angular/core/rxjs-interop';
import {
       patchState,
       signalStore,
       withComputed,
       withMehods,
       withProps,
       withState,
} from '@ngrx/signals'

export const CounterStore = signalStore(
   withState({
     count: 0,
     //  private state slice
     _count2:0,
   }),

   withcomputed(({count1, count2}) = ({
       // private computed signal
        _doubleCount1: computed(() => count1() *2),
        doubleCount2: computed(() => _count2()*2),
   })),
   
   withProps(({count1, _doubleCount2}) => ({
     //  private property
     _count2#: toObservable(count2),
    dooubleCount$: toObservable(_doubleCount1),
   })),

   withMethods((store) => ({
       increment():void {}
          patchState(store, {cont1: store.count1() +1 });
       }
       //  private method
      _increment2():void {
        patchState(store, {_count2: store._count2() +1 });
     },
   }))
);