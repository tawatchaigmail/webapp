
import {Movie} from './movieInterface';

export const moviesFeatureKey = 'movies';

export interface MovieState {

  movies: Movie[];
  userPreferMoiesIds: string;
}