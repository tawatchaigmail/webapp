
import {Movie} from './movieInterface';

//export const moviesFeatureKey = 'movies';

export interface MovieState {

  movies : Movie[];
  userPreferredMoviesIds : string[];
  moviesPerPage : number;
  currentPageIndex : number;
  userPreferMoiesIds : string;
}