import {createSelector, createFeatureSelector} from '@ngrx/store';
import {Book} from '../../../models/ngrx/bookInterface';

export const bookSelects = createFeatureSelector<ReadonlyArray<Book>>('books') ;
export const collectionFeatureSelect = createFeatureSelector<ReadonlyArray<string>>('collection')

export const bookCollectionSelect  = createSelector(
                                             bookSelects,
                                             collectionFeatureSelect,
                                             (books, collection) => {
                                                      return collection.map((id) => books.find((book) => book.id === id)!);
                                                     }
                              
                                           );