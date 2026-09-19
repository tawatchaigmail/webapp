import {createActionGroup, props} from '@ngrx/store';
import {Movie} from '../../../models/ngrx/movieInterface';

export const MoviesPageActions = createActionGroup(
                                               {
                                                source : 'movie',
                                                events  :  {
                                                              opened : props<{movieId : string}>(),
                                                              loadMovies : props<{movies : Movie[]}>()
                                                           }   

                                                },

);

