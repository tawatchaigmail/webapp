import {createReducer, on, Action } from '@ngrx/store'

//import {MoviesApiActions} from '../actions/movies-api.actions' ;
import {MoviesPageActions, } from '../actions/movies-page.actions' ;

import {Movie} from '../../../models/ngrx/movieInterface'
import {MovieState} from '../../../models/ngrx/movieStateInterface'


export const initialState : MovieState = {
                   
                                      movies: [],
                                      userPreferredMoviesIds : [],
                                      moviesPerPage : 10,
                                      currentPageIndex : 5,
                                      userPreferMoiesIds : '0',

 } ;

export const moviesReducer = createReducer<MovieState, Action>(

  initialState,
 // on(MoviesPageActions.loadMovies,(state, {MovieState} ) => state.movies ),
  on(
     MoviesPageActions.loadMovies, (MovieState, Action) => (
                                                           {
                                                            ...MovieState,
                                                            movies :  Action.movies,
                                                            
                                                           }
                                                           ),
    ), 
  on(
     MoviesPageActions.opened, (MovieState, Action) => (
                                                       {
                                                        ...MovieState,
                                                        userPreferMoiesIds : Action.movieId
                                                       }
                                                       ),
  )

 // on('[Movies Page] Load Movies',(state, {movies}) => movies)
);