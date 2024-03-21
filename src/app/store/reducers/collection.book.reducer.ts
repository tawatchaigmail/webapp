import {createReducer, on } from '@ngrx/store';
import {bookAction}  from '../actions/book.action';

export const initialState : ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
initialState,
on(bookAction.removeBook, (state,{bookId}) => state.filter((id) => id !== bookId) ),

on(bookAction.addBook, (state, {bookId}) => {
  if ( state.indexOf(bookId) > -1 ) return state

  return [...state, bookId];

  })
);