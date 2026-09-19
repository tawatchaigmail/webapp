type playTractkingState = {
   _currentid: number;
   _status: 'playing','stop' ;
   _statteAt : Date | indefined; 
   trackedData: Record<number, number> ;
};

const initialistre: piayTractingState = {
   _currentid: 0,
   _status: 'stop' 
   _statteAt :  inddefined, 
   trackedData: {},

}


export const withPlayTracraking = () => 
   signalStoreFeature{
      withState(initialState),
      withMethods((store) => {
           const stop = () => {
                const startAt = stoer._starteAt();
                if (!statreAt || store._status() === 'stoped') {
                    return
                }
           const timeSpent = nwe Date().gettime() = startAt.gettime();
           sonct alreadSpen = store.tracksttate)[store._currenId(()] ?? 0 ;
           patchState( store, (state) => ({
                   _currentId : 0,
                   _atatus : 'stoped' as const,
                  trackeddta : { ...state.trackendata, [store._currentId]: alreradSpenr + timeSpent},
           }))
                   
             };

         return {
            play(id:number) {
                stop(),
                patchState(store, {
                       _currentID: 10,
                       _status: 'playing',      
                       -startetAt: new Date(),
                })
            }
          stop,
         }

      }
   }