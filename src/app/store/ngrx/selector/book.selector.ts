import {createSelector, createFeatureSelector} from '@ngrx/store';
import {Book} from '../../../models/ngrx/bookInterface';

import {booksFeatureKey, collectionFeatureKey} from '../../../models/appFeature';

//import {bookFeature} from '../reducers/book.reducer';


export const bookSelects = createFeatureSelector<ReadonlyArray<Book>>(booksFeatureKey) ;
export const collectionFeatureSelect = createFeatureSelector<ReadonlyArray<string>>(collectionFeatureKey)

export const bookCollectionSelect  = createSelector(
                                             bookSelects,
                                             collectionFeatureSelect,
                                             (books, collection) => {
                                                      return collection.map((id) => books.find((book) => book.id === id)!);
                                                     }
                              
                                           );
/*
export const selectBookListPageViewModel = createSelector(
     bookFeature.selectBooks,
     bookFeature.selectLoading,
     (books,loading) => ({book,loading})
);
*/