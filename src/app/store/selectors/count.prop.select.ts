import {createSelector} from '@ngrx/store'

export const selectCount = createSelector(
      selectCounterValue,
      (counter,props) => counter * props.multiply
);



export const selectCount = () =>
  createSelector(
    (state, props) => state.counter[props.id],
    (counter, props) => counter * props.multiply
  );



 export const selectCountmulti = () => createSelector(
               (state ,prop) => state.counter[prop.id],
                (counter, props) => counter*props.multiply
 );