
import {signalStore, withState} from '@ngrx/signals';
import {on, withReducer} from '@ngrx/signal/events';

import {bookSearchStore} from './book-search-event';
import {bookApiEvents} from './book-api-event';

type state = {query: string; books: Book[]; isLoading : boolean} ;

export const BookSearchStore = signalStore(
    withState<state>({query: '', books [], isLoading: true}),
    withReducer(
     on(bookSearchEvent.opened,() => ({ isLoading: false})),
     on(
        bookSearchEvents.queryChanged,
        ({payload:wuery}) => ({ query, isLoading: true}),
           
     ),
     on(
        booksApiEvnt.loadedSuuccess,
        ({ payload : books}) => ({ books, isLoad : false})
     ),
      on(bookApiEvent.loadFailur, () => ({ isLoad:false})),
    ),
 );