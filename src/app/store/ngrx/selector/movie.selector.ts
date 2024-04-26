import {createFeatureSelector, createSelector} from '@ngrx/store'

import {Movie} from '../../../models/ngrx/movieInterface';
import {MovieState} from '../../../models/ngrx/movieStateInterface'

//export const movieFeature = createFeatureSelector<ReadonlyArray<Movie>>('movies') ;


export const movieFeature = createFeatureSelector<MovieState>('movies') ;

export const movieSelector = createSelector(
                                            movieFeature,
                                           (state ) => state.movies
                                            );