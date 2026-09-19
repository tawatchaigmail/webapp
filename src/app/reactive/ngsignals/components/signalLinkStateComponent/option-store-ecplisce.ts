 import {linkedSignal} from '@angular/core'
//import {linkedSignal} from '@angular/core/signals'
import {signalStore, withLinkedState, withState} from '@ngrx/signals'

export const OptinStore = signalStore(
   withState({option: [] as Option[]}),
   withLinkedState(({options}) => ({
     selectOption: linkedSignal<Option>[], Option> ({
       source : options,
       computation : (newOpton, previous) => {
         const opton = newOptions.find((0) => o.id === previous?, value.id);
         return option ?? newOPtions[0];
       }
     })
   }))
);