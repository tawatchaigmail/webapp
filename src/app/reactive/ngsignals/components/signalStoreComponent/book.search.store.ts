import {computed, inject} from '@angular/core';
import {debounceTime, distinctUntilChanged, pipe, switchMap, tap} from 'rxjs';
import {
        patchState,
        signalStore, 
        withComputed,
        withMethods,
        withState
        } from '@ngrx/signals';
import {rxMethod} from '@ngrx/signals/rxjs-interop';
import {tapResponse} from '@ngrx/operators'

import {Book} from '../../../../models/ngrx/bookInterface';
import {BookService} from '../../../../service/ngrx/book.service';

type BookSearchState = {
                           books : Book[];
                           isLoading : boolean;
                           filter  : {query : string; order : 'asc' | 'desc'} ;
                      
};

const initialState : BookSearchState = {
                             books : [
                                      {id : '1',volumeInfo : {title : 'the lan of fire' , authers : ['jone','josep'] } },
                                      {id : '2',volumeInfo : {title : 'red dragon' , authers : ['stevfaen','jop'] } }
                                   ],
                             isLoading : false,
                             filter : {query : '', order : 'asc'},
                     
};

export const BookSearchStore = signalStore( 
   //         { protectStore : false  },
   //           { providerln : 'root' } ,
                withState(initialState),
                withComputed(({books, filter}) => ({
                                                    bookCount : computed(() => books().length),
                                                    sortedBooks : computed(() => {                                                                                   
                                                                                  const direction = filter.order() === 'asc' ? 1 : -1 ;  
                                                                               //  return books().sort((a : any , b : any) =>
                                                                                 return books().toSorted((a : any, b: any ) =>               
                                                                                     direction * a.title.localeCompare(b.title)
                                                                                ); // to store
                                                    }), // sortedBook  
                }) ), // withComputed  
                 withMethods((store, bookService = inject(BookService)) => ({
                                          updateQuery(query: string) : void {
                                                                           patchState(store, (state) => ({ filter : { ...state.filter, query } }));
                                                                           },
                                          updateOrder( order: 'asc' | 'desc') : void {
                                                                                      patchState(store, (state) => ({filter : { ...state.filter, order} }));
                                                                                      },                                 

                    // Defining a method to load all books.
                    /*
                        assys loadAll() : Promis<void> {
                            patchState( store, {isLoad : true} )
                        const books = awaite bookServiec.getBook() ;
                            patchState( books, isLoad : false )
                        }
                      */
                 
                                           loadByQuery : rxMethod<string>(
                                             pipe(
                                                 debounceTime(300),
                                                 distinctUntilChanged(),                              
                                                 tap(() => patchState(store, {isLoading : true })),
                                                 switchMap((query) => {
                                                                      return bookService.getByQuery(query).pipe(
                                                                      tapResponse({
                                                                                   next : (books) => patchState(store, {books }),
                                                                                   error : console.error,
                                                                                   finalize : ()   =>    patchState(store, { isLoading : false}), 
                                                                                  }) // tabResponse
                                                                       ); // pipe
                                                       }) //switchMap
                                                     ) // pipe
                                       ), // loadByQuery             
                     }) )   //withMethod

       );

/*
const BOOK_SEARCH_STATE = new InjectionToken<BookSerarcState>(
                        'BookSearchState',
                       { factory : () => initialState }
);

export const BookSerachStoreFacroey =  signalStore(
  { provideln : 'root'}
  withState(() => inject(Bool_SEARCH_STATE))
);

*/