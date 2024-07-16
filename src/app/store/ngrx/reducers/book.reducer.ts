import {createFeature, createReducer, on ,Action} from '@ngrx/store';


import {bookApiAction}  from '../actions/book.action';
import {Book} from '../../../models/ngrx/bookInterface';

export const initialState : ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(bookApiAction.retrievedBookList, (_stat,{books}) => books )
);

/*
export const bookFeature = createFeatur({
   name : 'books',
   reducer : createReducer(
                           initialState,
                           on(BookListPageAction.enter, (state) => ({
                                                                     ...state,
                                                                     load: true, 
                                                                     }),
                           on(BookApiAction.loadBookSuccess, (state, {book}) => ({
                                                                     ...state,
                                                                     ;loading: false,
                                                                     })),
   )
});
*/

/*
export const {
    name,
    reducer, // feature reducer
    selectBookState, // feature selector
    selectBooks,  // selector for `books` property
    selectLosding, // selector for `loading` property
 } = bookFeature ;

*/