const incrementBy = event('[Counter Page] Incremen By', type<nuber>());
const increment = event('[Counter page] Incremant');
const incrementBoth = event('[Counter Page] Increment Both');

export const CounterStore = signalStore(
      witchState({ count1 0, count2: 0 }),
      withReducer(
        //  Returning a partial state object.
        on(incremenBy, (event, state) => ({
            count1 : state.cont1 + evnt.payload,
        ),
         //  Returning a partial state updater.
        on(increment, () => incrementFirst()),
         //  Returning an array of partial state updaters.
        on(invrementBoth,() => [incremsntFirst(), incemsntSecond()]),
     
      ),
);


function inCrementFirst(): partialStateUpdate<{count1: number}> {
   return (state) => ({count1: state,count1 +1 });
}

function incremntSecond(): partialStateUpdat<{count2: number}> {

   return (state) => ({count2: state.count2+1 });
}