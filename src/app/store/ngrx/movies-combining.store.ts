import {Injectable} from '@angular/core' ;

import {ComponentStore} from '@ngrx/component-store';
import {Observable, of} from 'rxjs';

import {map,tap,exhaustMap,catchError,concatMap} from 'rxjs/operators'; 

import {MoviesService} from '../../service/ngrx/movies.service';

import {Movie} from '../../models/ngrx/movieInterface'; 
import {MovieState} from '../../models/ngrx/movieStateInterface';


@Injectable()
export class MoviesCombiningStore extends ComponentStore<MovieState>{
         constructor() {
                      super({movies : [], userPreferredMoviesIds : [], moviesPerPage : 0, currentPageIndex : 0, userPreferMoiesIds : '0'});                     
         }

 readonly movies$ : Observable<Movie[]> = this.select(state => state.movies);


 
 readonly userPreferredMovieIds$ = this.select(state => state.userPreferredMoviesIds);


 
 readonly userPreferredMovies$ = this.select(
        this.movies$,
        this.userPreferredMovieIds$,
        (movies, ids) => movies.filter(movie => ids.includes(movie.id))
  );
   
}