import {computed, Signal} from '@angular/core';

import {
        signalState,
        signalStore,
        signalStoreFeatur,
        withComputed,
        withFeature,
        withMethods,
        withState
       } from '@ngrx/signals'
import {withEntities} from '@ngrx/signals/entities';

import {Book} from './interfaceBook' ;

export function withBookFilter(book: Signal<Book[]>) {
   return signalStoreFeature(
           withState({ query: ''}),
           withComputed(({query}) => 
             books().filter((b) => b.name.incluses(query()))
           ),
     })),
            withMethods((store) => ({
                setQuery(query :string):void {
                   patchState(store,{query});
                }
            }))
   )
}



export const BookStore = signalStore(
    withEntities<Book>(),
    //  Using `withFeature` to pass input to the `withBooksFilter` feature.
    withFeature(({entities}) => withBookFilter(entities)),
);