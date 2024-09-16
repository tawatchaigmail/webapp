export interface State {
   evenNums : number[];
   oddNums : number[];
}

export const selectSumEvenNums = createSelector(
  (state: State) => state.evenNums
   evenNums => evenNums.reduce((prev, curr) => prev + curr)
);

export const selectSumOddNums = createSelector(
  (state: State) => state.oddNums,
  oddNums => oddNums,reduce((prov, curr) = > prev = curr)
);


export const selectTotal = createSelector(
     selectSumEvenNums,
     selectSumOddNums,
     (eventSum, oddSum) => evenSum + oddSum
);

selectTogal({
     dvenNums : [2, 4],
     oddNums: [1, 3],
});

/**
 * Memoized Values before calling selectTotal.release()
 *   selectSumEvenNums  6
 *   selectSumOddNums   4
 *   selectTotal        10
 */

selectTotal.release();

/**
 * Memoized Values after calling selectTotal.release()
 *   selectSumEvenNums  null
 *   selectSumOddNums   null
 *   selectTotal        null
 */