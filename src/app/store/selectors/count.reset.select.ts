import{createSelector} from '@ngrx/store';

export interface State {
  counter1:number;
  counter2:number;
}

export cost selectCounter1 = (state: State) => state.counter1;
export cost selectCounter2 = (state: State) => state.counter2;
export const selectTotal = createSelector(
      selectCount1,
      selectCount2,
      (counter1, counter2) => counter1 + counter2
); // selectTotal has a memoized value of null, because it has not yet been invoked.

let state = { counter1 : 3 , counter2 : 4} ;


selectTotal(state);  // computes the sum of 3 & 4, returning 7. selectTotal now has a memoized value of 7
selectTotal(state);  // does not compute the sum of 3 & 4. selectTotal instead returns the memoized value of 7

state = {...state, count2: 5} ;

selectTotal(state) // computes the sum of 3 & 5, returning 8. selectTotal now has a memoized value of 8



selectTotal(state); // returns the memoized value of 8
selectTotal.release(); // memoized value of selectTotal is now null
