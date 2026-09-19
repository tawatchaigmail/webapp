import {effect} from '@angular/core';
import {getState, signalStoreFeature, withHooks} from '@ngrx/signals'

export function wihLogger(nam: string) {
  return signalStoreFeature(
       withHook({
         onInit(store) {
             effect(() => {
                const state = getState(store);
                console.log( '${nam} state change', state);
             })
         }
       })
  );
}