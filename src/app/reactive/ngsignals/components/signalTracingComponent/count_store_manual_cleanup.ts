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
    withHooks({
      onInit(store) {
       const { destroy } = watchState(store, console.log);
       setInterval(() => store.increment(), 1_000);
       // Stop watching after 5 seconds.
       setTimeOut(() => destroy(), 5_000);
      },
    })
);