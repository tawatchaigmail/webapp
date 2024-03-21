import {createReducer, on ,Action} from '@ngrx/store';

import {bookApiAction}  from '../actions/book.action';
import {Book} from '../../models/bookInterface';

export const initialState : ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
  initialState,
  on(bookApiAction.retrievedBookList, (_stat,{books}) => books )
);